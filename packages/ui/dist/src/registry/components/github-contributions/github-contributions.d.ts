import type { Activity } from "@/registry/components/contribution-graph"

export declare function GitHubContributions({
  contributions,
  githubProfileUrl,
  className,
}: {
  contributions: Promise<Activity[]>
  githubProfileUrl: string
  className?: string
}): import("react").JSX.Element
export declare function GitHubContributionsFallback(): import("react").JSX.Element
