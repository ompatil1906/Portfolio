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
  parent?: {
    full_name: string
    stargazers_count: number
  } | null
  /** Root repo of the fork network. Only returned by single-repo endpoints. */
  source?: {
    full_name: string
    stargazers_count: number
  } | null
}
export type RawGitHubIssue = {
  id: number
  title: string
  html_url: string
  state: string
  created_at: string
  repository_url: string
  pull_request?: {
    merged_at: string | null
  } | null
}
/** GitHub list endpoints return a bare array; search endpoints wrap items. */
export declare function extractRepoPage(data: unknown): RawGitHubRepo[]
export declare function extractIssuePage(data: unknown): RawGitHubIssue[]
/** Reads the `rel="next"` URL from a GitHub `Link` header, if present. */
export declare function getNextLink(
  link: string | null | undefined
): string | null
export declare function mapRepo(raw: RawGitHubRepo): GitHubRepo
/**
 * Maps a search-issue result to a contribution. Pull requests against the
 * viewer's own repositories are dropped: those are fork-sync or self-authored
 * PRs, not outside contributions.
 */
export declare function mapContribution(
  raw: RawGitHubIssue,
  viewer: string
): GitHubContribution | null
export declare function groupGitHubData(
  repos: RawGitHubRepo[],
  issues: RawGitHubIssue[],
  viewer: string
): GitHubData
