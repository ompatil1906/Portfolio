import { unstable_cache } from "next/cache"

import {
  extractIssuePage,
  extractRepoPage,
  getNextLink,
  groupGitHubData,
  type GitHubData,
  type RawGitHubIssue,
  type RawGitHubRepo,
} from "@/registry/lib/get-github-data/github-data"

const GITHUB_API = "https://api.github.com"

function getHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  }

  const token = process.env.GITHUB_API_TOKEN
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

/** Follows `Link` pagination until exhausted, with a safety cap. */
async function fetchAllPages<T>(
  url: string,
  extract: (data: unknown) => T[]
): Promise<T[]> {
  const items: T[] = []
  let next: string | null = url

  while (next) {
    const res = await fetch(next, { headers: getHeaders() })

    if (!res.ok) {
      throw new Error(`GitHub API request failed (${res.status})`)
    }

    items.push(...extract(await res.json()))
    next = getNextLink(res.headers.get("link"))

    if (items.length >= 1000) {
      break
    }
  }

  return items
}

/**
 * Number of per-fork upstream requests to run at once, to stay clear of
 * GitHub's secondary (burst) rate limits.
 */
const UPSTREAM_FETCH_CONCURRENCY = 8

/**
 * The user-repos list endpoint omits `parent`/`source`, so forks arrive with no
 * upstream. Fetch each fork's own record to recover the original project (the
 * network root, `source`) so forks can be labelled and ranked by the original
 * repo's stars. Failures leave the fork unenriched rather than failing the run.
 */
async function withUpstreamRepos(
  repos: RawGitHubRepo[]
): Promise<RawGitHubRepo[]> {
  const forks = repos.filter(
    (repo) => repo.fork && !repo.parent && !repo.source
  )

  if (forks.length === 0) {
    return repos
  }

  const upstreamByFullName = new Map<
    string,
    RawGitHubRepo["parent"] | undefined
  >()

  for (let i = 0; i < forks.length; i += UPSTREAM_FETCH_CONCURRENCY) {
    const chunk = forks.slice(i, i + UPSTREAM_FETCH_CONCURRENCY)

    await Promise.all(
      chunk.map(async (repo) => {
        try {
          const res = await fetch(`${GITHUB_API}/repos/${repo.full_name}`, {
            headers: getHeaders(),
          })

          if (!res.ok) {
            return
          }

          const data = (await res.json()) as RawGitHubRepo
          upstreamByFullName.set(repo.full_name, data.source ?? data.parent)
        } catch {
          // Ignore; the fork renders without upstream metadata.
        }
      })
    )
  }

  return repos.map((repo) => {
    const upstream = upstreamByFullName.get(repo.full_name)
    return upstream ? { ...repo, parent: upstream } : repo
  })
}

/**
 * Fetches a user's repositories (owned + forks) and their authored pull
 * requests. Throws on failure so the cache layer never stores an error result;
 * callers of `getCachedGithubData` receive `null` instead.
 */
async function fetchGithubData(username: string): Promise<GitHubData> {
  const [repos, issues] = await Promise.all([
    fetchAllPages<RawGitHubRepo>(
      `${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated&type=owner`,
      extractRepoPage
    ),
    fetchAllPages<RawGitHubIssue>(
      `${GITHUB_API}/search/issues?q=${encodeURIComponent(
        `author:${username} type:pr`
      )}&per_page=100&sort=created&order=desc`,
      extractIssuePage
    ),
  ])

  return groupGitHubData(await withUpstreamRepos(repos), issues, username)
}

const getCachedGithubDataUncached = unstable_cache(
  fetchGithubData,
  ["github-data"],
  { revalidate: 86400 } // 1 day
)

/**
 * Cached wrapper around {@link fetchGithubData}. Returns `null` when the API is
 * unreachable or rate-limited, so callers can render nothing instead of an
 * empty shell. Failures are not cached, so a transient error does not hide the
 * data for a full revalidation window.
 */
export async function getCachedGithubData(
  username: string
): Promise<GitHubData | null> {
  if (!username) {
    return null
  }

  try {
    return await getCachedGithubDataUncached(username)
  } catch {
    return null
  }
}
