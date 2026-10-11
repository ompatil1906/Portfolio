import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview/", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Applebot-Extended",
          "Google-Extended",
          "Meta-ExternalAgent",
          "cohere-ai",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/*.md"],
        disallow: ["/preview/", "/api/"],
      },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
    host: SITE_INFO.url,
  }
}
