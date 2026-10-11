import Image from "next/image"

import { ChanhDaiMark } from "@/components/chanhdai-mark"
import { USER } from "@/features/portfolio/data/user"

export default function OgPage() {
  return (
    <div className="relative flex h-[630px] w-[1200px] flex-col justify-between overflow-hidden bg-[#09090b] p-16 text-zinc-100 select-none">
      {/* Background grid and ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a20_1px,transparent_1px),linear-gradient(to_bottom,#27272a20_1px,transparent_1px)] bg-size-[32px_32px]"
        aria-hidden
      />

      {/* Top row: Brand mark and website domain */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ChanhDaiMark className="h-8 w-auto text-zinc-100" />
          <div className="h-4 w-px bg-zinc-800" />
          <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
            Portfolio &amp; Registry
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 font-mono text-xs text-zinc-300 shadow-sm backdrop-blur-md">
          <span className="size-2 rounded-full bg-emerald-400" />
          heyompatil.me
        </div>
      </div>

      {/* Middle row: Profile + Core Headline */}
      <div className="relative z-10 my-auto flex items-center gap-10">
        <div className="relative size-32 shrink-0 overflow-hidden rounded-2xl border-2 border-zinc-700/80 bg-zinc-800 shadow-2xl">
          <Image
            src={USER.avatar}
            alt={USER.displayName}
            width={128}
            height={128}
            className="size-full object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              {USER.displayName}
            </h1>
            <span className="rounded-md border border-zinc-800 bg-zinc-900/90 px-3 py-1 font-mono text-xs text-zinc-400">
              {USER.jobTitle}
            </span>
          </div>

          <p className="text-2xl font-medium tracking-tight text-zinc-200">
            {USER.headline}
          </p>

          <p className="max-w-2xl text-base/relaxed text-zinc-400">
            {USER.bio}
          </p>
        </div>
      </div>

      {/* Bottom row: Highlights / Badges */}
      <div className="relative z-10 flex items-center justify-between border-t border-zinc-800/80 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 font-mono text-xs text-zinc-300">
            <span className="text-zinc-500">Role:</span>
            <span>AskLumenAI</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 font-mono text-xs text-zinc-300">
            <span className="text-zinc-500">Student Founder:</span>
            <span>ViksitHub</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 font-mono text-xs text-zinc-300">
            <span className="text-zinc-500">Focus:</span>
            <span>GenAI · Agentic AI · RAG</span>
          </div>
        </div>

        <div className="font-mono text-xs text-zinc-500">
          Pune, Maharashtra, India
        </div>
      </div>
    </div>
  )
}
