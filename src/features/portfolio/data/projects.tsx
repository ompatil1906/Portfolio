import {
  Bot,
  Brain,
  Code2,
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
 * Priority projects first (SupportLM, ViksitHub, Warden), followed by the
 * featured group and an archive tier. The projects panel shows the first four
 * and expands those flagged with `isExpanded`, so keep the strongest work at
 * the top.
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
- Adapter (~10.6M params) trained with LoRA/PEFT via MLX on a 16 GB Apple Silicon MacBook Air, with the reproducible [triage dataset](https://huggingface.co/datasets/Ompatil19/SupportLM-triage-dataset) public on Hugging Face.`,
    icon: <Bot />,
    isExpanded: true,
  },
  {
    id: "viksithub-coming-soon",
    title: "ViksitHub",
    period: {
      start: "2025",
    },
    link: "https://viksithub.in",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    description: `A founder-built startup-ecosystem platform prototype that helps founders discover resources, mentorship, and funding.

- Prototype scope: startup dashboard for profiles, applications, and resources; startup listing/discovery; login and registration with Firebase; responsive UI with Framer Motion animations.
- The main product repository is private; the public site is currently a coming-soon landing page.`,
    icon: <Leaf />,
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
      "WebSockets",
      "React",
      "TypeScript",
    ],
    description: `An autonomous B2B purchasing agent that protects merchant revenue from high-velocity stockouts — built for the **Razorpay Buildathon, Track 1 (AI Growth & Agentic Commerce)**.

- The LLM proposes; a deterministic, AP2-inspired gate disposes. Every money decision is checked against merchant-signed financial boundaries (Ed25519-signed intent → cart → payment mandate chain).
- Runs on Razorpay rails with signature-verified webhooks and idempotent, exactly-once execution. **Test/simulated payments only** — never real funds.
- [Live dashboard](https://warden-ebon.vercel.app) and [API docs](https://autonomous-b2b-supply-chain-restocking.onrender.com/docs).`,
    icon: <ShoppingCart />,
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

- **Production-style MVP** (independent project): Next.js dashboard with a multi-agent pipeline, pgvector-backed RAG memory, human-approval gates, and audit logs.
- FastAPI backend with JWT auth, SQLAlchemy/Postgres schema, prompt-injection guard, and a Docker Compose + GitHub Actions pipeline.`,
    icon: <Wrench />,
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
      "Product Strategy",
      "FastAPI",
      "Full-stack",
    ],
    description: `An AI research-intelligence platform for students and researchers. As **Head of AI Technology**, I lead product strategy and technical direction.

- Multi-agent research workflows that plan, retrieve, and synthesize across sources.
- A research/personalization layer (rolling memory, saved citations, past reports) so answers adapt to each user over time.
- Academic-source integrations (arXiv, Crossref, Semantic Scholar, OpenAlex) with APA/IEEE/Harvard/BibTeX/RIS citations.`,
    icon: <Sparkles />,
  },
  {
    id: "geovisionai",
    title: "GeoVisionAI",
    period: {
      start: "2026",
    },
    link: "https://github.com/ompatil1906/GeoVisionAI",
    skills: [
      "Python",
      "FastAPI",
      "PyTorch",
      "OpenCV",
      "GeoPandas",
      "Rasterio",
      "Leaflet",
      "Next.js",
    ],
    description: `A full-stack satellite-image analysis platform for land-cover screening, flood detection, burned-area detection, and before/after change detection.

- Upload JPG/PNG/TIF imagery and inspect masks, overlays, heatmaps, and summary metrics on an interactive Leaflet dashboard; export a PDF report with imagery, metrics, and a timestamp.
- Flood and burn-scar detection use RGB fallbacks; the land-cover model is inference-ready but trained production weights are not bundled, so outputs are demo-grade — not scientific-accuracy claims.`,
    icon: <Satellite />,
  },
  {
    id: "sales-agent-app",
    title: "Sales Agent App",
    period: {
      start: "2025",
    },
    link: "https://sales-agent-app-iota.vercel.app",
    skills: ["TypeScript", "Next.js", "Tailwind CSS", "LLMs"],
    description: `A Next.js AI sales-assistant prototype for conversational lead qualification and inquiry handling.

- Aimed at tracking leads and conversation history with real-time UI updates; the README is early-stage and does not confirm the model provider integration.`,
    icon: <MessagesSquare />,
  },
  {
    id: "codemate",
    title: "CodeMate",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/CodeMate",
    skills: ["TypeScript", "Next.js", "LLMs", "Developer Tools"],
    description: `A coding-companion concept with code completion, real-time analysis, a snippet library, and multi-language support.

- Early-stage: the repository README is high-level and does not document the completion model, analysis engine, or any benchmark.`,
    icon: <Code2 />,
  },
  {
    id: "serg-system",
    title: "SERG System",
    period: {
      start: "2025",
    },
    link: "https://github.com/ompatil1906/SERG-System",
    skills: [
      "ESP32",
      "C++",
      "Node.js",
      "Express",
      "Firebase",
      "Next.js",
      "IoT",
    ],
    description: `A real-time accident-detection and emergency-alert system built around ESP32 hardware.

- An ESP32 with an MPU6050 motion sensor and GPS streams to a Node.js/Express API that runs the detection logic and triggers alerts.
- Alerts flow through Firebase to a real-time Next.js monitoring dashboard.`,
    icon: <Server />,
  },
  {
    id: "cortexai",
    title: "CortexAI",
    period: {
      start: "2024",
    },
    link: "https://github.com/ompatil1906/CortexAI",
    skills: [
      "Python",
      "LoRA",
      "PEFT",
      "MLX",
      "Qwen2.5-1.5B",
      "NLP",
      "Evaluation",
    ],
    description: `The training and evaluation repository behind SupportLM — LoRA fine-tuning of Qwen2.5-1.5B-Instruct with MLX on Apple Silicon.

- Covers the data, training, evaluation, and demo pipeline, with baseline-vs-fine-tuned metrics and conversion verification.
- The published SupportLM adapter and triage dataset are linked from its model card.`,
    icon: <Brain />,
  },
]
