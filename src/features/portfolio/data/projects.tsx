import { ChanhDaiMark } from "@/components/chanhdai-mark"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    period: {
      start: "2026",
    },
    link: "https://github.com/ompatil1906/Portfolio",
    skills: [
      "Open Source",
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "shadcn/ui",
      "shadcn registry",
      "MDX",
      "Vercel",
    ],
    description: "A pixel-perfect dev portfolio and shadcn registry.",
    icon: <ChanhDaiMark />,
    isExpanded: true,
  },
  {
    id: "warden",
    title: "Warden",
    period: {
      start: "2025",
    },
    link: "https://warden-ebon.vercel.app",
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    description: "A full-stack web application for monitoring and management.",
  },
  {
    id: "sales-agent-app",
    title: "Sales Agent App",
    period: {
      start: "2025",
    },
    link: "https://sales-agent-app-iota.vercel.app",
    skills: ["TypeScript", "Next.js", "LLMs", "Agentic AI"],
    description:
      "An agentic sales assistant that automates outreach and lead qualification.",
  },
  {
    id: "hr-automation",
    title: "HR Automation",
    period: {
      start: "2025",
    },
    link: "https://coldmailos.vercel.app",
    skills: ["TypeScript", "Next.js", "LLMs", "Automation"],
    description:
      "Automates cold outreach and HR communication workflows. Available at [coldmailos.vercel.app](https://coldmailos.vercel.app).",
  },
  {
    id: "buildos",
    title: "BuildOS",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/BuildOS",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
    description:
      "A builder’s operating system for shipping and tracking projects.",
  },
  {
    id: "codemate",
    title: "CodeMate",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/CodeMate",
    skills: ["TypeScript", "Next.js", "LLMs", "Developer Tools"],
    description:
      "An AI pair-programming assistant for code generation and review.",
  },
  {
    id: "serg-system",
    title: "SERG System",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/SERG-System",
    skills: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
    description: "A full-stack management system for operations and reporting.",
  },
  {
    id: "ai-powered-quiz-generation-using-rag",
    title: "AI-Powered Quiz Generation using RAG",
    period: {
      start: "2024",
    },
    link: "https://ai-powered-quiz-generation-using-ra.vercel.app",
    skills: ["RAG", "LLMs", "JavaScript", "Vercel"],
    description:
      "Generates quizzes from source documents using retrieval-augmented generation.",
  },
  {
    id: "consultantai",
    title: "ConsultantAI",
    period: {
      start: "2024",
    },
    link: "https://github.com/ompatil1906/ConsultantAI",
    skills: ["JavaScript", "LLMs", "RAG"],
    description:
      "An AI consultant that answers domain questions using retrieved context.",
  },
  {
    id: "cortexai",
    title: "CortexAI",
    period: {
      start: "2024",
    },
    link: "https://github.com/ompatil1906/CortexAI",
    skills: ["Python", "LLMs", "Machine Learning"],
    description:
      "An AI platform exploring model orchestration and LLM pipelines.",
  },
  {
    id: "geovisionai",
    title: "GeoVisionAI",
    period: {
      start: "2024",
    },
    link: "https://github.com/ompatil1906/GeoVisionAI",
    skills: ["Python", "Computer Vision", "Deep Learning", "GeoAI"],
    description: "Computer vision applied to geospatial and satellite imagery.",
  },
]
