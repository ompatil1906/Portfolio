import { formatCompactNumber } from "@/utils/format"
import { addQueryParams } from "@/utils/url"
import { StarIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import type { GitHubRepo } from "@/registry/lib/get-github-data/github-data"

export function RepoItem({ repo }: { repo: GitHubRepo }) {
  return (
    <div className="relative flex items-center gap-4 p-4 transition-colors hover:bg-accent-muted">
      <div className="min-w-0 flex-1">
        <h3 className="truncate leading-snug font-medium">
          <a
            className="absolute inset-0"
            href={addQueryParams(repo.url, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
            aria-label={`Open ${repo.fullName} on GitHub`}
          >
            <span className="sr-only">{repo.fullName}</span>
          </a>
          {repo.name}
        </h3>

        {repo.upstream && (
          <p className="truncate text-sm text-muted-foreground">
            fork of {repo.upstream}
          </p>
        )}

        {repo.description && (
          <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
            {repo.description}
          </p>
        )}
      </div>

      {repo.language && (
        <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">
          {repo.language}
        </span>
      )}

      <span className="flex shrink-0 items-center gap-1 text-sm text-muted-foreground tabular-nums">
        <StarIcon className="size-3.5" aria-hidden />
        {formatCompactNumber(repo.stars)}
      </span>
    </div>
  )
}
