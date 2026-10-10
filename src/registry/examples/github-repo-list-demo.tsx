import { GitHubRepoList } from "@/registry/components/github-repo-list"
import type { GitHubRepo } from "@/registry/lib/get-github-data/github-data"

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

export default function GitHubRepoListDemo() {
  return (
    <div className="w-full max-w-xl p-4">
      <GitHubRepoList repos={REPOS} className="rounded-xl border border-line" />
    </div>
  )
}
