export type GitHubRepo = {
  id: number
  name: string
  /** `owner/name` as it lives on GitHub. */
  fullName: string
  description: string | null
  /** GitHub HTML URL. */
  url: string
  /** Primary language, if any. */
  language: string | null
  /** Star count. For forks this is the upstream repo's star count. */
  stars: number
  isFork: boolean
  /** `owner/name` of the upstream repo, when this is a fork. */
  upstream: string | null
  /** ISO timestamp of the last push. */
  pushedAt: string
}

export type GitHubContributionState = "merged" | "closed" | "open"

export type GitHubContribution = {
  id: number
  /** `owner/name` of the repository the pull request targets. */
  repo: string
  title: string
  url: string
  state: GitHubContributionState
  createdAt: string
}

export type GitHubData = {
  /** Authored pull requests against repositories the viewer does not own. */
  contributions: GitHubContribution[]
  /** Repositories the viewer forked, ranked by the original repo's stars. */
  forks: GitHubRepo[]
  /** Repositories the viewer owns (non-forks). */
  owned: GitHubRepo[]
}

export type RawGitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  fork: boolean
  pushed_at: string
  /** Immediate upstream repo. Only returned by single-repo endpoints. */
  parent?: { full_name: string; stargazers_count: number } | null
  /** Root repo of the fork network. Only returned by single-repo endpoints. */
  source?: { full_name: string; stargazers_count: number } | null
}

export type RawGitHubIssue = {
  id: number
  title: string
  html_url: string
  state: string
  created_at: string
  repository_url: string
  pull_request?: { merged_at: string | null } | null
}

const GITHUB_REPOS_API = "https://api.github.com/repos/"

/** GitHub list endpoints return a bare array; search endpoints wrap items. */
export function extractRepoPage(data: unknown): RawGitHubRepo[] {
  return Array.isArray(data) ? (data as RawGitHubRepo[]) : []
}

export function extractIssuePage(data: unknown): RawGitHubIssue[] {
  const items = (data as { items?: unknown }).items
  return Array.isArray(items) ? (items as RawGitHubIssue[]) : []
}

/** Reads the `rel="next"` URL from a GitHub `Link` header, if present. */
export function getNextLink(link: string | null | undefined): string | null {
  if (!link) {
    return null
  }

  for (const segment of link.split(",")) {
    const match = segment.match(/<([^>]+)>;\s*rel="next"/)
    if (match) {
      return match[1]
    }
  }

  return null
}

export function mapRepo(raw: RawGitHubRepo): GitHubRepo {
  // Prefer the fork network's root (`source`) so the label and star count point
  // at the original project rather than an intermediate fork.
  const upstream = raw.fork ? (raw.source ?? raw.parent ?? null) : null

  return {
    id: raw.id,
    name: raw.name,
    fullName: raw.full_name,
    description: raw.description,
    url: raw.html_url,
    language: raw.language,
    stars: upstream ? upstream.stargazers_count : raw.stargazers_count,
    isFork: raw.fork,
    upstream: upstream ? upstream.full_name : null,
    pushedAt: raw.pushed_at,
  }
}

/**
 * Maps a search-issue result to a contribution. Pull requests against the
 * viewer's own repositories are dropped: those are fork-sync or self-authored
 * PRs, not outside contributions.
 */
export function mapContribution(
  raw: RawGitHubIssue,
  viewer: string
): GitHubContribution | null {
  const repo = raw.repository_url.startsWith(GITHUB_REPOS_API)
    ? raw.repository_url.slice(GITHUB_REPOS_API.length)
    : raw.repository_url

  const owner = repo.split("/")[0]
  if (owner.toLowerCase() === viewer.toLowerCase()) {
    return null
  }

  const merged = Boolean(raw.pull_request?.merged_at)
  const state: GitHubContributionState = merged
    ? "merged"
    : raw.state === "open"
      ? "open"
      : "closed"

  return {
    id: raw.id,
    repo,
    title: raw.title,
    url: raw.html_url,
    state,
    createdAt: raw.created_at,
  }
}

function byStarsThenName(a: GitHubRepo, b: GitHubRepo): number {
  return b.stars - a.stars || a.name.localeCompare(b.name)
}

export function groupGitHubData(
  repos: RawGitHubRepo[],
  issues: RawGitHubIssue[],
  viewer: string
): GitHubData {
  const mapped = repos.map(mapRepo)

  return {
    contributions: issues
      .map((issue) => mapContribution(issue, viewer))
      .filter((item): item is GitHubContribution => item !== null)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    forks: mapped.filter((repo) => repo.isFork).sort(byStarsThenName),
    owned: mapped.filter((repo) => !repo.isFork).sort(byStarsThenName),
  }
}
