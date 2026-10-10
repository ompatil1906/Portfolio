import { addQueryParams } from "@/utils/url"
import {
  GitMergeIcon,
  GitPullRequestClosedIcon,
  GitPullRequestIcon,
} from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { cn } from "@/lib/utils"
import type {
  GitHubContribution,
  GitHubContributionState,
} from "@/registry/lib/get-github-data/github-data"

const STATE_META: Record<
  GitHubContributionState,
  { label: string; icon: typeof GitPullRequestIcon; className: string }
> = {
  merged: {
    label: "Merged",
    icon: GitMergeIcon,
    className: "text-violet-700 dark:text-violet-400",
  },
  open: {
    label: "Open",
    icon: GitPullRequestIcon,
    className: "text-green-700 dark:text-green-500",
  },
  closed: {
    label: "Closed",
    icon: GitPullRequestClosedIcon,
    className: "text-red-700 dark:text-red-400",
  },
}

export function ContributionItem({
  contribution,
}: {
  contribution: GitHubContribution
}) {
  const meta = STATE_META[contribution.state]
  const Icon = meta.icon

  return (
    <div className="relative flex items-center gap-4 p-4 transition-colors hover:bg-accent-muted">
      <Icon className={cn("size-4 shrink-0", meta.className)} aria-hidden />

      <div className="min-w-0 flex-1">
        <h3 className="truncate leading-snug font-medium">
          <a
            className="absolute inset-0"
            href={addQueryParams(contribution.url, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
            aria-label={`Open pull request: ${contribution.title}`}
          >
            <span className="sr-only">{contribution.title}</span>
          </a>
          {contribution.title}
        </h3>
        <p className="truncate text-sm text-muted-foreground">
          {contribution.repo}
        </p>
      </div>

      <span
        className={cn(
          "shrink-0 text-sm font-medium tabular-nums",
          meta.className
        )}
      >
        {meta.label}
      </span>
    </div>
  )
}
