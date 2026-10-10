import { BriefcaseBusinessIcon, CodeXmlIcon, LightbulbIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "asklumenai",
    companyName: "AskLumenAI",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Founding AI/ML Engineer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Building the core AI/ML platform from the ground up, from LLM orchestration to production deployment.
- Designing and shipping RAG pipelines, agentic workflows, and evaluation harnesses.
- Owning model integration, prompt engineering, and the data layer end to end.`,
        skills: [
          "Python",
          "PyTorch",
          "LLMs",
          "RAG",
          "Agentic AI",
          "LangChain",
          "FastAPI",
          "PostgreSQL",
          "Docker",
          "AWS",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "viksithub",
    companyName: "ViksitHub",
    companyWebsite: "https://viksithub-coming-soon.vercel.app",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "2",
        title: "Student Founder — Product & Full-Stack Engineer",
        employmentPeriod: {
          start: "09.2025",
          end: "06.2026",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Leading product and full-stack engineering for an early-stage education platform.
- Designing, building, and shipping features across the stack, from UI to APIs and data.
- Setting up the engineering foundation, tooling, and deployment workflows.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Node.js",
          "Tailwind CSS",
          "PostgreSQL",
          "Product",
          "Full-stack",
        ],
      },
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "09.2025",
          end: "06.2026",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        skills: [
          "Entrepreneurship",
          "Product Strategy",
          "Business Development",
        ],
      },
    ],
  },
  {
    id: "xerxez",
    companyName: "Xerxez Solutions",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Remote",
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
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Remote",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Data Science Intern",
        employmentPeriod: {
          start: "2024",
          end: "2024",
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
