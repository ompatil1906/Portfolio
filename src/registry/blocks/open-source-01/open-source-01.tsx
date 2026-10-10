import { GitHubContributionList } from "@/registry/components/github-contribution-list"
import { GitHubRepoList } from "@/registry/components/github-repo-list"
import type {
  GitHubContribution,
  GitHubRepo,
} from "@/registry/lib/get-github-data/github-data"

export function OpenSource01() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="mx-auto max-w-3xl space-y-8 px-4 py-8">
        <h2 className="font-heading text-3xl font-medium tracking-tight">
          Open source
        </h2>

        <section className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Contributions
          </h3>
          <GitHubContributionList
            contributions={CONTRIBUTIONS}
            className="rounded-xl border border-line"
          />
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Repositories
          </h3>
          <GitHubRepoList
            repos={REPOS}
            className="rounded-xl border border-line"
          />
        </section>
      </div>
    </div>
  )
}

const CONTRIBUTIONS: GitHubContribution[] = [
  {
    id: 1,
    title: "Add structured output support to the agent runtime",
    repo: "langchain-ai/langchain",
    url: "https://github.com/langchain-ai/langchain/pull/41188",
    state: "merged",
    createdAt: "2026-02-18T10:00:00.000Z",
  },
  {
    id: 2,
    title: "Fix chunk overlap in the sentence splitter",
    repo: "run-llama/llama_index",
    url: "https://github.com/run-llama/llama_index/pull/23443",
    state: "open",
    createdAt: "2026-02-11T10:00:00.000Z",
  },
  {
    id: 3,
    title: "Document DVC pipeline caching for large datasets",
    repo: "treeverse/dvc",
    url: "https://github.com/treeverse/dvc/pull/11105",
    state: "closed",
    createdAt: "2026-01-29T10:00:00.000Z",
  },
]

const REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "langchain",
    fullName: "ompatil1906/langchain",
    url: "https://github.com/ompatil1906/langchain",
    description: "Build context-aware reasoning applications.",
    language: "Python",
    stars: 0,
    isFork: true,
    upstream: "langchain-ai/langchain",
    pushedAt: "2026-02-18T10:00:00.000Z",
  },
  {
    id: 2,
    name: "dspy",
    fullName: "ompatil1906/dspy",
    url: "https://github.com/ompatil1906/dspy",
    description:
      "The framework for programming, not prompting, language models.",
    language: "Python",
    stars: 0,
    isFork: true,
    upstream: "stanfordnlp/dspy",
    pushedAt: "2026-02-11T10:00:00.000Z",
  },
  {
    id: 3,
    name: "GeoVisionAI",
    fullName: "ompatil1906/GeoVisionAI",
    url: "https://github.com/ompatil1906/GeoVisionAI",
    description: "Geospatial vision models for satellite imagery.",
    language: "Python",
    stars: 1,
    isFork: false,
    upstream: null,
    pushedAt: "2026-02-02T10:00:00.000Z",
  },
]
