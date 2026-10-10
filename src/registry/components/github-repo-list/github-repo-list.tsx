import { StarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { GitHubRepo } from "@/registry/lib/get-github-data/github-data"

export type GitHubRepoListProps = React.ComponentProps<"ul"> & {
  repos: GitHubRepo[]
}

export function GitHubRepoList({
  repos,
  className,
  ...props
}: GitHubRepoListProps) {
  if (repos.length === 0) {
    return (
      <p className={cn("p-4 text-sm text-muted-foreground", className)}>
        No repositories.
      </p>
    )
  }

  return (
    <ul className={cn("divide-y divide-line", className)} {...props}>
      {repos.map((repo) => (
        <li
          key={repo.id}
          className="relative flex items-center gap-4 p-4 transition-colors hover:bg-accent-muted"
        >
          <div className="min-w-0 flex-1">
            <h3 className="truncate leading-snug font-medium">
              <a
                className="absolute inset-0"
                href={repo.url}
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
            {new Intl.NumberFormat("en-US", {
              notation: "compact",
              compactDisplay: "short",
            }).format(repo.stars)}
          </span>
        </li>
      ))}
    </ul>
  )
}
