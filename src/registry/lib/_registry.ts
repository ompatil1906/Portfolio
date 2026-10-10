import type { Registry } from "shadcn/schema"

export const lib: Registry["items"] = [
  {
    name: "haptic",
    type: "registry:lib",
    title: "Haptic Feedback",
    description: "Trigger haptic feedback on mobile devices.",
    files: [
      {
        path: "lib/haptic/haptic.ts",
        type: "registry:lib",
        target: "@lib/haptic.ts",
      },
    ],
    categories: ["utilities"],
    docs: "https://ompatil1906.vercel.app/components/haptic",
  },
  {
    name: "get-github-data",
    type: "registry:lib",
    title: "Get GitHub Data",
    description:
      "Fetch a GitHub user's repositories and authored pull requests, with caching and rate-limit handling.",
    dependencies: [],
    files: [
      {
        path: "lib/get-github-data/github-data.ts",
        type: "registry:lib",
        target: "@lib/get-github-data/github-data.ts",
      },
      {
        path: "lib/get-github-data/get-cached-github-data.ts",
        type: "registry:lib",
        target: "@lib/get-github-data/get-cached-github-data.ts",
      },
    ],
    categories: ["data-display"],
  },
  {
    name: "get-openpanel-overview",
    type: "registry:lib",
    title: "Get OpenPanel Overview",
    description:
      "Fetch OpenPanel analytics overview metrics and their period-over-period changes, with caching.",
    dependencies: [],
    files: [
      {
        path: "lib/openpanel/get-openpanel-overview.ts",
        type: "registry:lib",
        target: "@lib/openpanel/get-openpanel-overview.ts",
      },
    ],
    categories: ["data-display"],
  },
]
