import "server-only"

import { GITHUB_USERNAME } from "@/config/site"
import { getCachedGithubData } from "@/registry/lib/get-github-data/get-cached-github-data"
import type { GitHubData } from "@/registry/lib/get-github-data/github-data"

/**
 * Owned repositories hidden from the Open Source panel. These are personal
 * scaffolding repos (profile README, the portfolio source itself, throwaway
 * apps) that do not belong in a showcase of shipped work. Matched by name,
 * case-insensitively.
 */
const HIDDEN_OWNED_REPOS = new Set([
  "portfolio",
  "hr-automation",
  "applyonce",
  "om",
  "ompatil1906",
])

export async function getOpenSource(): Promise<GitHubData | null> {
  const data = await getCachedGithubData(GITHUB_USERNAME)

  if (data === null) {
    return null
  }

  return {
    ...data,
    owned: data.owned.filter(
      (repo) => !HIDDEN_OWNED_REPOS.has(repo.name.toLowerCase())
    ),
  }
}
