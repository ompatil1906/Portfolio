import type { GitHubContribution } from "@/registry/lib/get-github-data/github-data"

export type GitHubContributionListProps = React.ComponentProps<"ul"> & {
  contributions: GitHubContribution[]
}
export declare function GitHubContributionList({
  contributions,
  className,
  ...props
}: GitHubContributionListProps): import("react").JSX.Element
