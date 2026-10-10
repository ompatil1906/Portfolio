import type { User } from "@/features/portfolio/types/user"

const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/162890913?v=4"

export const USER: User = {
  firstName: "Om",
  lastName: "Patil",
  displayName: "Om Patil",
  username: "ompatil1906",
  gender: "male",
  pronouns: "he/him",
  bio: "Building practical AI systems. LLMs, agents, and full-stack.",
  flipSentences: [
    "Building practical AI systems.",
    "AI & Data Science Engineer.",
    "Generative AI & Agentic AI.",
    "Full-Stack AI Engineer.",
  ],
  address: "Pune, Maharashtra, India",
  phoneNumberB64: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "cGF0aWxvbTE5MDZAZ21haWwuY29t", // patilom1906@gmail.com
  website: "https://ompatil1906.vercel.app",
  jobTitle: "AI/ML Engineer",
  jobs: [
    {
      title: "Founding AI/ML Engineer",
      company: "AskLumenAI",
      website: "https://asklumen-ai.netlify.app",
      experienceId: "asklumenai",
    },
    {
      title: "Founder & Full-Stack Engineer",
      company: "ViksitHub",
      website: "https://viksithub.com",
      experienceId: "viksithub",
    },
  ],
  about: `- I'm Om Patil — an AI & Data Science engineer focused on Generative AI, Agentic AI, and AI product engineering.
- I build practical AI systems that connect LLMs, autonomous agents, APIs, data, and automation to solve real-world problems.
- Founding AI/ML Engineer at [AskLumenAI](https://asklumen-ai.netlify.app), Student Founder at ViksitHub, and Winner of the National Level AI Summit 2025.
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
  namePronunciationUrl: "/audio/om-patil.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "om patil",
    "ompatil",
    "ompatil1906",
    "om patil ai",
    "ai engineer",
    "machine learning engineer",
    "generative ai",
    "agentic ai",
    "llm",
    "rag",
    "pune",
  ],
  dateCreated: "2024-03-10", // YYYY-MM-DD
}
