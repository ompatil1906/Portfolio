import { CodeXmlIcon, LightbulbIcon } from "lucide-react"

import type { ExperienceItemType } from "@/registry/components/work-experience"
import { WorkExperience } from "@/registry/components/work-experience"

export default function WorkExperienceDemo() {
  return <WorkExperience className="w-full" experiences={WORK_EXPERIENCE} />
}

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "asklumenai",
    companyName: "AskLumenAI",
    companyWebsite: "https://asklumenai.com",
    positions: [
      {
        id: "1",
        title: "Head of AI Technology",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Lead product strategy and technical direction for an AI research-intelligence platform for students and researchers.
- Designed multi-agent research workflows that plan, retrieve, and synthesize findings across sources.
- Built a research/personalization layer and rolling memory so responses adapt to each user over time.
- Integrated academic sources (arXiv, Crossref, Semantic Scholar, OpenAlex) with citation formats like APA, IEEE, Harvard, BibTeX, and RIS.
- Own the full stack end to end, from LLM orchestration and retrieval to the shipped product surface.`,
        skills: [
          "Python",
          "LLMs",
          "Agentic AI",
          "RAG",
          "LangGraph",
          "FastAPI",
          "PostgreSQL",
          "Full-stack",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "viksithub",
    companyName: "ViksitHub",
    companyWebsite: "https://viksithub.in",
    positions: [
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "09.2025",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        description: `- Founded ViksitHub, a startup-ecosystem platform prototype helping founders discover resources, mentorship, and funding.
- Led product direction and full-stack engineering (Next.js, React, Firebase).`,
        skills: [
          "Entrepreneurship",
          "Product Strategy",
          "Business Development",
        ],
      },
    ],
  },
]
