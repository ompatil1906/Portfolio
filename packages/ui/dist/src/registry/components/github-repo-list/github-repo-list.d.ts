import type { GitHubRepo } from "@/registry/lib/get-github-data/github-data"

export type GitHubRepoListProps = React.ComponentProps<"ul"> & {
  repos: GitHubRepo[]
}
export declare function GitHubRepoList({
  repos,
  className,
  ...props
}: GitHubRepoListProps): import("react").JSX.Element
