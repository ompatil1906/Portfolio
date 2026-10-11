import type { Person } from "schema-dts"

import { SITE_INFO } from "@/config/site"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

/**
 * Stable @id anchors so Google can merge JSON-LD nodes across separate
 * <script> blocks (and pages) into a single entity in the Knowledge Graph.
 * The "#fragment" keeps each node id distinct from the page URL itself.
 */
export const JSON_LD_ID = {
  website: `${SITE_INFO.url}/#website`,
  person: `${SITE_INFO.url}/#person`,
} as const

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": JSON_LD_ID.person,
  name: USER.displayName,
  alternateName: [USER.username, "Om", "ompatil"],
  identifier: USER.username,
  image: USER.avatar,
  url: SITE_INFO.url,
  mainEntityOfPage: SITE_INFO.url,
  jobTitle: USER.jobTitle,
  description: SITE_INFO.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "AskLumenAI",
      url: "https://asklumenai.com",
    },
    {
      "@type": "Organization",
      name: "ViksitHub",
      url: "https://viksithub.in",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "AISSMS Institute of Information Technology",
  },
  award: ["Winner - National Level AI Summit 2025"],
  knowsAbout: [
    "Generative AI",
    "Agentic AI",
    "Agentic Systems",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Multi-agent systems",
    "LangGraph",
    "Full-stack AI development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "AI & Data Science Engineer",
    skills:
      "Generative AI, Agentic Systems, Multi-Agent Workflows, RAG, Full-Stack AI",
  },
  // Public profiles opt in via their `sameAs` flag (Knowledge Graph).
  sameAs: SOCIAL_LINKS.filter((link) => link.sameAs).map((link) => link.href),
}
