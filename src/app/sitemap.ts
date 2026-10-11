import type { MetadataRoute } from "next"

import { blockCategories } from "@/config/registry"
import { SITE_INFO } from "@/config/site"
import { getAllBlockStaticParams } from "@/lib/blocks"
import { getComponentDocs } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const components: MetadataRoute.Sitemap = getComponentDocs().map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(
      post.metadata.updatedAt || post.metadata.createdAt || Date.now()
    ).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      post.metadata.image ||
        `${SITE_INFO.url}/og/simple?title=${encodeURIComponent(post.metadata.title)}&description=${encodeURIComponent(post.metadata.description)}`,
    ],
  }))

  const blockCategoryPages: MetadataRoute.Sitemap = blockCategories.map(
    (category) => ({
      url: `${SITE_INFO.url}/blocks/${category.name}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  )

  const blocks: MetadataRoute.Sitemap = (await getAllBlockStaticParams()).map(
    ({ category, name }) => ({
      url: `${SITE_INFO.url}/blocks/${category}/${name}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${SITE_INFO.url}/og/simple?title=${encodeURIComponent(name)}`],
    })
  )

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_INFO.url}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${SITE_INFO.url}/screenshots/screenshot-desktop-dark.webp`],
    },
    {
      url: `${SITE_INFO.url}/components`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_INFO.url}/components/showcase`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_INFO.url}/blocks`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_INFO.url}/timeline`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_INFO.url}/insights`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_INFO.url}/bookmarks`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_INFO.url}/sponsors`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  return [...staticPages, ...components, ...blockCategoryPages, ...blocks]
}
