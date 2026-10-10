import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://ompatil1906.vercel.app",
  ogImage: USER.ogImage,
  description:
    "Om Patil is an AI & Data Science engineer building GenAI and agentic systems — multi-agent research workflows, RAG, LLM triage models, and full-stack AI products. Explore featured projects, research, and experience.",
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/ompatil1906/Portfolio/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "ompatil1906/Portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ompatil1906/Portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/ompatil1906"

export const UTM_PARAMS = {
  utm_source: "ompatil1906.vercel.app",
}
