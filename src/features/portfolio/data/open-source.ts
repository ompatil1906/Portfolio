import "server-only"

import { GITHUB_USERNAME } from "@/config/site"
import { getCachedGithubData } from "@/registry/lib/get-github-data/get-cached-github-data"

export function getOpenSource() {
  return getCachedGithubData(GITHUB_USERNAME)
}
