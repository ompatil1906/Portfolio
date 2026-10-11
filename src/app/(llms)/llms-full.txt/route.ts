import { SITE_INFO } from "@/config/site"
import { EDUCATION } from "@/features/portfolio/data/education"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { RECOGNITION_BY_DATE } from "@/features/portfolio/data/recognition"
import { PUBLICATIONS } from "@/features/portfolio/data/research"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"
import { TECH_STACK } from "@/features/portfolio/data/tech-stack"
import { USER } from "@/features/portfolio/data/user"
import type {
  AwardRecognition,
  CredentialRecognition,
} from "@/features/portfolio/types/recognition"

function formatAward({ award, date }: AwardRecognition) {
  const meta = [
    `Prize: ${award.prize}`,
    `Date: ${date}`,
    `Context: ${award.grade}`,
    award.referenceLink && `[Reference](${award.referenceLink})`,
  ]
    .filter(Boolean)
    .join(" | ")
  const description = award.description ? `\n${award.description.trim()}` : ""
  return `### ${award.title}\n${meta}${description}`
}

function formatCredential({ credential, date }: CredentialRecognition) {
  return `- [${credential.title}](${credential.credentialURL}): issued by ${credential.issuer} on ${date}`
}

function generateFullContent(): string {
  const sections: string[] = []

  // Header & Bio
  sections.push(`# ${USER.displayName} - Full AI Engineer Profile & Resume

Website: ${SITE_INFO.url}
Title: ${USER.jobTitle}
Location: ${USER.address}
Headline: ${USER.headline}

## Summary
${USER.about.trim()}
`)

  // Social & Online Presence
  sections.push(`## Verified Profiles & Links
${SOCIAL_LINKS.map((link) => `- [${link.title}](${link.href}) (${link.handle})`).join("\n")}
`)

  // Technical Experience
  sections.push(`## Professional Experience
${EXPERIENCES.map((exp) =>
  exp.positions
    .map((pos) => {
      const skills = pos.skills?.join(", ") || "N/A"
      const end = pos.employmentPeriod.end || "Present"
      return `### ${pos.title} — ${exp.companyName} (${pos.employmentPeriod.start} - ${end})
Company URL: ${exp.companyWebsite || "N/A"}
Skills: ${skills}

${pos.description?.trim() || ""}`
    })
    .join("\n\n")
).join("\n\n")}
`)

  // Featured Projects
  sections.push(`## Featured Projects
${PROJECTS.map((project) => {
  const skills = `Skills: ${project.skills.join(", ")}`
  const description = project.description
    ? `\n${project.description.trim()}`
    : ""
  return `### ${project.title}
URL: ${project.link}
${skills}${description}`
}).join("\n\n")}
`)

  // Research & Publications
  if (PUBLICATIONS.length > 0) {
    sections.push(`## Research & Publications
${PUBLICATIONS.map((res) => {
  return `### ${res.title}
Authors: ${res.authors.join(", ")}
Venue: ${res.venue} (${res.volume})
Date: ${res.date}
DOI: ${res.doi}
Paper URL: ${res.link}

${res.abstract.trim()}`
}).join("\n\n")}
`)
  }

  // Technical Skills / Stack
  sections.push(`## Core Technical Stack & AI Tools
${TECH_STACK.map((tech) => `- ${tech.title}: ${tech.href}`).join("\n")}
`)

  // Recognition, Awards & Certifications
  const awards = RECOGNITION_BY_DATE.flatMap((entry) =>
    entry.kind === "award" ? [entry] : []
  )
  const certifications = RECOGNITION_BY_DATE.flatMap((entry) =>
    entry.kind === "certificate" ? [entry] : []
  )
  const intellectualProperty = RECOGNITION_BY_DATE.flatMap((entry) =>
    entry.kind === "trademark" || entry.kind === "copyright" ? [entry] : []
  )

  sections.push(`## Awards & Honors
${awards.map(formatAward).join("\n\n")}
`)

  sections.push(`## Certifications
${certifications.map(formatCredential).join("\n")}
`)

  if (intellectualProperty.length > 0) {
    sections.push(`## Intellectual Property & Patents
${intellectualProperty.map(formatCredential).join("\n")}
`)
  }

  // Education
  sections.push(`## Education
${EDUCATION.map(
  (edu) =>
    `- **${edu.degree}** — ${edu.school} (${edu.period.start} - ${edu.period.end || "Present"})`
).join("\n")}
`)

  return sections.join("\n\n")
}

const content = generateFullContent()

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
