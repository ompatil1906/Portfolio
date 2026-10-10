import { GitHubContributionList } from "@/registry/components/github-contribution-list"
import type { GitHubContribution } from "@/registry/lib/get-github-data/github-data"

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

export default function GitHubContributionListDemo() {
  return (
    <div className="w-full max-w-xl p-4">
      <GitHubContributionList
        contributions={CONTRIBUTIONS}
        className="rounded-xl border border-line"
      />
    </div>
  )
}
