import {
  Bot,
  Brain,
  CloudSun,
  Code2,
  DollarSign,
  Film,
  LayoutGrid,
  Leaf,
  MessagesSquare,
  Satellite,
  Server,
  ShoppingCart,
  Sparkles,
  Wrench,
} from "lucide-react"

import type { Project } from "../types/projects"

/**
 * Featured projects first (SupportLM, Warden, BuildOS, AskLumenAI), followed by
 * an archive tier. The projects panel expands the first four and collapses the
 * rest, so keep the strongest work at the top.
 */
export const PROJECTS: Project[] = [
  {
    id: "supportlm",
    title: "SupportLM",
    period: {
      start: "2026",
    },
    link: "https://huggingface.co/Ompatil19/SupportLM_V1.0.2",
    skills: [
      "LoRA",
      "PEFT",
      "Qwen2.5-1.5B",
      "LLM fine-tuning",
      "Structured output",
      "NLP",
    ],
    description: `A **LoRA adapter** that turns Qwen2.5-1.5B-Instruct into a structured customer-support triage assistant, returning a single JSON object with \`emotion\`, \`urgency\`, \`summary\`, \`next_action\`, and \`suggested_reply\`.

- Reported on a 600-ticket synthetic holdout: emotion **55.7% → 99.0%**, urgency **19.8% → 94.8%**, emotion+urgency exact match **94.5%**, valid structured output **99.8%**.
- Honest scope: the reply field can invent amounts (~59%) and next-action accuracy is **56.3%**, so it is a triage aid with a human in the loop, not automated replies.
- Adapter (~10.6M params) and the reproducible [triage dataset](https://huggingface.co/datasets/Ompatil19/SupportLM-triage-dataset) are public on Hugging Face.`,
    icon: <Bot />,
    isExpanded: true,
  },
  {
    id: "warden",
    title: "Warden",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/Warden",
    skills: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Razorpay",
      "Ed25519",
      "React",
      "TypeScript",
    ],
    description: `An autonomous B2B purchasing agent that protects merchant revenue from high-velocity stockouts — built for the **Razorpay Buildathon, Track 1 (AI Growth & Agentic Commerce)**.

- The LLM proposes; a deterministic, AP2-inspired gate disposes. Every money decision is checked against merchant-signed financial boundaries (Ed25519-signed intent → cart → payment mandate chain).
- Runs on Razorpay rails with signature-verified webhooks and idempotent, exactly-once execution. **Test/simulated payments only** — never real funds.
- [Live dashboard](https://warden-ebon.vercel.app) and [API docs](https://autonomous-b2b-supply-chain-restocking.onrender.com/docs).`,
    icon: <ShoppingCart />,
    isExpanded: true,
  },
  {
    id: "buildos",
    title: "BuildOS",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/BuildOS",
    skills: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    description: `An AI software-building operating system that turns a product idea into a PRD, architecture, task breakdown, generated full-stack starter code, a GitHub PR plan, CI/CD workflow, build report, and security review.

- **Production-style MVP** (independent project): Next.js dashboard with an agent pipeline, pgvector-backed RAG memory, human-approval gates, and audit logs.
- FastAPI backend with JWT auth, SQLAlchemy/Postgres schema, prompt-injection guard, and a Docker Compose + GitHub Actions pipeline.`,
    icon: <Wrench />,
    isExpanded: true,
  },
  {
    id: "asklumenai",
    title: "AskLumenAI",
    period: {
      start: "2025",
    },
    link: "https://asklumenai.com",
    skills: [
      "Multi-agent",
      "RAG",
      "LLMs",
      "Personalization",
      "FastAPI",
      "Full-stack",
    ],
    description: `An AI-powered learning and research assistant. As **Director, Product, Strategy & Technology**, I lead product and the technical direction.

- Multi-agent research workflows that plan, retrieve, and synthesize across sources.
- A research/personalization layer with rolling memory so answers adapt to each user over time.
- Academic-source integrations (arXiv, Crossref, Semantic Scholar, OpenAlex) with APA/IEEE/Harvard/BibTeX/RIS citations.`,
    icon: <Sparkles />,
    isExpanded: true,
  },
  {
    id: "geovisionai",
    title: "GeoVisionAI",
    period: {
      start: "2026",
    },
    link: "https://github.com/ompatil1906/GeoVisionAI",
    skills: ["Python", "FastAPI", "PyTorch", "OpenCV", "Geospatial", "Next.js"],
    description: `A satellite-based multi-hazard monitoring platform: upload imagery and run land-cover classification, flood detection, burned-area detection, and before/after change detection with map overlays and PDF reports.

- **Honest scope:** a portfolio demo using classical computer-vision fallbacks — trained production weights are not bundled.`,
    icon: <Satellite />,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    period: {
      start: "2026",
    },
    link: "https://github.com/ompatil1906/Portfolio",
    skills: [
      "Open Source",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "MDX",
      "Vercel",
    ],
    description: "A personal portfolio and shadcn registry built with Next.js.",
    icon: <LayoutGrid />,
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
    icon: <MessagesSquare />,
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
      "Automates cold outreach and HR communication workflows. Live at [coldmailos.vercel.app](https://coldmailos.vercel.app).",
    icon: <Server />,
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
    icon: <Code2 />,
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
    icon: <Server />,
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
    icon: <Brain />,
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
    icon: <Brain />,
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/Movie-Recommendation-System-using-ML",
    skills: ["Python", "scikit-learn", "Cosine similarity", "Streamlit"],
    description:
      "A Streamlit app that recommends similar movies using content-based filtering (cosine similarity over a public TMDB dataset) — a learning project.",
    icon: <Film />,
  },
  {
    id: "weather-prediction-project",
    title: "Weather Prediction",
    period: {
      start: "2024",
    },
    link: "https://github.com/ompatil1906/Wether-Prediction-Project",
    skills: ["Python", "scikit-learn", "Ridge Regression", "Pandas"],
    description:
      "Predicts weather features (temperature and precipitation) from historical data with Ridge Regression.",
    icon: <CloudSun />,
  },
  {
    id: "salary-prediction",
    title: "Salary Prediction",
    period: {
      start: "2024",
    },
    link: "https://github.com/ompatil1906/Salary-Prediction",
    skills: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    description:
      "A Streamlit web app that predicts salary from years of experience using a scikit-learn model.",
    icon: <DollarSign />,
  },
  {
    id: "viksithub-coming-soon",
    title: "ViksitHub (Coming Soon)",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/viksithub-coming-soon",
    skills: ["React", "Vite", "TypeScript"],
    description:
      "A placeholder landing site for ViksitHub while the product is being built.",
    icon: <Leaf />,
  },
]
