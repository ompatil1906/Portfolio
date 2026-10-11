import { BriefcaseBusinessIcon, CodeXmlIcon, LightbulbIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "asklumenai",
    companyName: "AskLumenAI",
    companyWebsite: "https://asklumenai.com",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Manchester, England, UK",
    locationType: "Remote",
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
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Pune, India",
    locationType: "On-site",
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
    isCurrentEmployer: true,
  },
  {
    id: "xerxez",
    companyName: "Xerxez Solutions",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Bangalore, India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Generative AI Intern",
        employmentPeriod: {
          start: "02.2025",
          end: "06.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Built generative AI features using large language models and prompt engineering.
- Experimented with RAG and NLP pipelines to improve response quality.`,
        skills: ["Python", "LLMs", "Generative AI", "NLP", "RAG"],
      },
    ],
  },
  {
    id: "nexyom",
    companyName: "Nexyom",
    companyWebsite: "https://www.nexyom.com",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "San Francisco, California, USA",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Data Science Intern",
        employmentPeriod: {
          start: "06.2025",
          end: "08.2025",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `- Performed data cleaning, feature engineering, and exploratory analysis on real-world datasets.
- Built and evaluated machine learning models to support business insights.`,
        skills: [
          "Python",
          "Pandas",
          "NumPy",
          "scikit-learn",
          "Machine Learning",
          "Data Science",
        ],
      },
    ],
  },
]
