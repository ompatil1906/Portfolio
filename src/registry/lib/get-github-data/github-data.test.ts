import { describe, expect, it } from "vitest"

import {
  extractIssuePage,
  extractRepoPage,
  getNextLink,
  groupGitHubData,
  mapContribution,
  mapRepo,
  type RawGitHubIssue,
  type RawGitHubRepo,
} from "./github-data"

function rawRepo(overrides: Partial<RawGitHubRepo> = {}): RawGitHubRepo {
  return {
    id: 1,
    name: "example",
    full_name: "ompatil1906/example",
    description: "An example repo",
    html_url: "https://github.com/ompatil1906/example",
    language: "TypeScript",
    stargazers_count: 2,
    fork: false,
    pushed_at: "2026-01-01T00:00:00Z",
    parent: null,
    ...overrides,
  }
}

function rawIssue(overrides: Partial<RawGitHubIssue> = {}): RawGitHubIssue {
  return {
    id: 1,
    title: "Fix a thing",
    html_url: "https://github.com/langchain-ai/langchain/pull/1",
    state: "open",
    created_at: "2026-01-01T00:00:00Z",
    repository_url: "https://api.github.com/repos/langchain-ai/langchain",
    pull_request: { merged_at: null },
    ...overrides,
  }
}

describe("getNextLink", () => {
  it("extracts the next URL from a Link header", () => {
    const link =
      '<https://api.github.com/x?page=2>; rel="next", <https://api.github.com/x?page=5>; rel="last"'

    expect(getNextLink(link)).toBe("https://api.github.com/x?page=2")
  })

  it("returns null when there is no next link", () => {
    expect(getNextLink(null)).toBeNull()
    expect(getNextLink('</x?page=5>; rel="last"')).toBeNull()
  })
})

describe("extractRepoPage", () => {
  it("returns the array from a list endpoint response", () => {
    const repo = rawRepo()
    expect(extractRepoPage([repo])).toEqual([repo])
  })

  it("returns an empty array for unexpected response shapes", () => {
    expect(extractRepoPage({ items: [] })).toEqual([])
    expect(extractRepoPage(null)).toEqual([])
  })
})

describe("extractIssuePage", () => {
  it("returns the items array from a search endpoint response", () => {
    const issue = rawIssue()
    expect(extractIssuePage({ total_count: 1, items: [issue] })).toEqual([
      issue,
    ])
  })

  it("returns an empty array when items is missing", () => {
    expect(extractIssuePage({ total_count: 0 })).toEqual([])
    expect(extractIssuePage([rawIssue()])).toEqual([])
  })
})

describe("mapRepo", () => {
  it("uses the repo's own stars for non-forks", () => {
    expect(mapRepo(rawRepo()).stars).toBe(2)
    expect(mapRepo(rawRepo()).isFork).toBe(false)
  })

  it("uses the upstream stars and upstream name for forks", () => {
    const fork = mapRepo(
      rawRepo({
        fork: true,
        stargazers_count: 0,
        parent: {
          full_name: "langchain-ai/langchain",
          stargazers_count: 100000,
        },
      })
    )

    expect(fork.isFork).toBe(true)
    expect(fork.upstream).toBe("langchain-ai/langchain")
    expect(fork.stars).toBe(100000)
  })
})

describe("mapContribution", () => {
  it("drops pull requests against the viewer's own repositories", () => {
    const issue = rawIssue({
      repository_url: "https://api.github.com/repos/ompatil1906/langchain",
    })

    expect(mapContribution(issue, "ompatil1906")).toBeNull()
  })

  it("labels merged pull requests as merged", () => {
    const issue = rawIssue({
      state: "closed",
      pull_request: { merged_at: "2026-02-01T00:00:00Z" },
    })

    expect(mapContribution(issue, "ompatil1906")?.state).toBe("merged")
  })

  it("labels closed-but-unmerged and open pull requests", () => {
    expect(
      mapContribution(rawIssue({ state: "closed" }), "ompatil1906")?.state
    ).toBe("closed")
    expect(
      mapContribution(rawIssue({ state: "open" }), "ompatil1906")?.state
    ).toBe("open")
  })
})

describe("groupGitHubData", () => {
  it("splits forks from owned repos and excludes self-authored PRs", () => {
    const data = groupGitHubData(
      [
        rawRepo({ id: 1, name: "owned" }),
        rawRepo({
          id: 2,
          name: "langchain",
          fork: true,
          parent: { full_name: "langchain-ai/langchain", stargazers_count: 5 },
        }),
      ],
      [
        rawIssue({ id: 10 }),
        rawIssue({
          id: 11,
          repository_url: "https://api.github.com/repos/ompatil1906/owned",
        }),
      ],
      "ompatil1906"
    )

    expect(data.forks.map((repo) => repo.name)).toEqual(["langchain"])
    expect(data.owned.map((repo) => repo.name)).toEqual(["owned"])
    expect(data.contributions.map((item) => item.repo)).toEqual([
      "langchain-ai/langchain",
    ])
  })
})
