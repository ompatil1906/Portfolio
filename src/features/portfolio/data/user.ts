import type { User } from "@/features/portfolio/types/user"

const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/162890913?v=4"

export const USER: User = {
  firstName: "Om",
  lastName: "Patil",
  displayName: "Om Patil",
  username: "ompatil1906",
  gender: "male",
  pronouns: "he/him",
  bio: "AI & Data Science engineer building LLM agents and full-stack AI products.",
  headline: "Building AI Systems That Go Beyond the Demo.",
  flipSentences: [
    "Building AI Systems That Go Beyond the Demo.",
    "GenAI & Agentic Systems Engineer.",
    "Multi-agent, RAG & full-stack AI.",
    "Shipping AI products that work.",
  ],
  address: "Pune, Maharashtra, India",
  phoneNumberB64: "KzkxNzQzNjA4Mzc5MA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "cGF0aWxvbTE5MDZAZ21haWwuY29t", // patilom1906@gmail.com
  website: "https://ompatil1906.vercel.app",
  jobTitle: "AI Engineer, GenAI & Agentic Systems",
  jobs: [
    {
      title: "Director, Product, Strategy & Technology",
      company: "AskLumenAI",
      website: "https://asklumenai.com",
      experienceId: "asklumenai",
    },
    {
      title: "Student Founder — Product & Full-Stack Engineer",
      company: "ViksitHub",
      website: "https://github.com/ompatil1906/viksithub-coming-soon",
      experienceId: "viksithub",
    },
  ],
  about: `- I'm Om Patil — an AI & Data Science engineer focused on Generative AI, Agentic Systems, and full-stack AI product engineering.
- I build practical AI systems that connect LLMs, autonomous agents, APIs, and data to solve real problems — from multi-agent research workflows to LLM triage models.
- Director, Product, Strategy & Technology at [AskLumenAI](https://asklumenai.com), student founder at ViksitHub, and Winner of the National Level AI Summit 2025.
`,
  avatar: GITHUB_AVATAR,
  avatarSketch: GITHUB_AVATAR,
  avatarVariants: {
    lightOff: GITHUB_AVATAR,
    lightOn: GITHUB_AVATAR,
    darkOff: GITHUB_AVATAR,
    darkOn: GITHUB_AVATAR,
  },
  ogImage: GITHUB_AVATAR,
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "om patil",
    "ompatil",
    "ompatil1906",
    "om patil ai",
    "ai engineer",
    "ai ml engineer",
    "generative ai",
    "genai",
    "agentic ai",
    "agentic systems",
    "llm",
    "langgraph",
    "rag",
    "multi-agent",
    "full stack ai",
    "pune",
  ],
  dateCreated: "2024-03-10", // YYYY-MM-DD
}
