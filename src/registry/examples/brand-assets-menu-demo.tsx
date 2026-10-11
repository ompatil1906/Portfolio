"use client"

import Link from "next/link"

import { BrandAssetsMenu } from "@/registry/components/brand-assets-menu"

export default function BrandAssetsMenuDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <BrandAssetsMenu
        logomark={<OPMark />}
        logomarkSVG={LOGOMARK_SVG}
        logotypeSVG={LOGOTYPE_SVG}
        brandGuidelinesURL="https://heyompatil.me/components/brand-assets-menu"
        brandAssetsURL="/icon.svg"
      >
        <Link href="/" aria-label="Home" className="inline-flex cursor-pointer">
          <OPMark className="h-8 text-foreground" />
        </Link>
      </BrandAssetsMenu>

      <div className="text-sm text-muted-foreground">
        <span className="hidden pointer-fine:inline-block">
          Right-click the logo
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Press & hold the logo
        </span>
      </div>
    </div>
  )
}

const LOGOMARK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 701.35 318.8"><path fill="currentColor" d="M 255.05 255.04 L 255.05 318.8 L 63.77 318.8 L 63.77 255.04 Z M 0 255.04 L 0 63.77 L 63.77 63.77 L 63.77 255.04 Z M 63.77 63.77 L 63.77 0 L 255.05 0 L 255.05 63.77 Z M 255.05 255.04 L 255.05 63.77 L 318.8 63.77 L 318.8 255.04 Z"/><path fill="currentColor" d="M 382.55 318.8 L 382.55 0 L 637.6 0 L 637.6 63.77 L 446.32 63.77 L 446.32 127.52 L 637.6 127.52 L 637.6 191.29 L 446.32 191.29 L 446.32 318.8 Z M 637.6 127.52 L 637.6 63.77 L 701.35 63.77 L 701.35 127.52 Z"/></svg>'

const LOGOTYPE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 482 90"><path fill="currentColor" d="M 20 10 h 10 v 10 h -10 Z M 30 10 h 10 v 10 h -10 Z M 40 10 h 10 v 10 h -10 Z M 10 20 h 10 v 10 h -10 Z M 50 20 h 10 v 10 h -10 Z M 10 30 h 10 v 10 h -10 Z M 50 30 h 10 v 10 h -10 Z M 10 40 h 10 v 10 h -10 Z M 50 40 h 10 v 10 h -10 Z M 10 50 h 10 v 10 h -10 Z M 50 50 h 10 v 10 h -10 Z M 10 60 h 10 v 10 h -10 Z M 50 60 h 10 v 10 h -10 Z M 20 70 h 10 v 10 h -10 Z M 30 70 h 10 v 10 h -10 Z M 40 70 h 10 v 10 h -10 Z M 74 10 h 10 v 10 h -10 Z M 114 10 h 10 v 10 h -10 Z M 74 20 h 10 v 10 h -10 Z M 84 20 h 10 v 10 h -10 Z M 104 20 h 10 v 10 h -10 Z M 114 20 h 10 v 10 h -10 Z M 74 30 h 10 v 10 h -10 Z M 94 30 h 10 v 10 h -10 Z M 114 30 h 10 v 10 h -10 Z M 74 40 h 10 v 10 h -10 Z M 114 40 h 10 v 10 h -10 Z M 74 50 h 10 v 10 h -10 Z M 114 50 h 10 v 10 h -10 Z M 74 60 h 10 v 10 h -10 Z M 114 60 h 10 v 10 h -10 Z M 74 70 h 10 v 10 h -10 Z M 114 70 h 10 v 10 h -10 Z M 182 10 h 10 v 10 h -10 Z M 192 10 h 10 v 10 h -10 Z M 202 10 h 10 v 10 h -10 Z M 212 10 h 10 v 10 h -10 Z M 182 20 h 10 v 10 h -10 Z M 222 20 h 10 v 10 h -10 Z M 182 30 h 10 v 10 h -10 Z M 222 30 h 10 v 10 h -10 Z M 182 40 h 10 v 10 h -10 Z M 192 40 h 10 v 10 h -10 Z M 202 40 h 10 v 10 h -10 Z M 212 40 h 10 v 10 h -10 Z M 182 50 h 10 v 10 h -10 Z M 182 60 h 10 v 10 h -10 Z M 182 70 h 10 v 10 h -10 Z M 256 10 h 10 v 10 h -10 Z M 266 10 h 10 v 10 h -10 Z M 276 10 h 10 v 10 h -10 Z M 246 20 h 10 v 10 h -10 Z M 286 20 h 10 v 10 h -10 Z M 246 30 h 10 v 10 h -10 Z M 286 30 h 10 v 10 h -10 Z M 246 40 h 10 v 10 h -10 Z M 256 40 h 10 v 10 h -10 Z M 266 40 h 10 v 10 h -10 Z M 276 40 h 10 v 10 h -10 Z M 286 40 h 10 v 10 h -10 Z M 246 50 h 10 v 10 h -10 Z M 286 50 h 10 v 10 h -10 Z M 246 60 h 10 v 10 h -10 Z M 286 60 h 10 v 10 h -10 Z M 246 70 h 10 v 10 h -10 Z M 286 70 h 10 v 10 h -10 Z M 310 10 h 10 v 10 h -10 Z M 320 10 h 10 v 10 h -10 Z M 330 10 h 10 v 10 h -10 Z M 340 10 h 10 v 10 h -10 Z M 350 10 h 10 v 10 h -10 Z M 330 20 h 10 v 10 h -10 Z M 330 30 h 10 v 10 h -10 Z M 330 40 h 10 v 10 h -10 Z M 330 50 h 10 v 10 h -10 Z M 330 60 h 10 v 10 h -10 Z M 330 70 h 10 v 10 h -10 Z M 374 10 h 10 v 10 h -10 Z M 384 10 h 10 v 10 h -10 Z M 394 10 h 10 v 10 h -10 Z M 384 20 h 10 v 10 h -10 Z M 384 30 h 10 v 10 h -10 Z M 384 40 h 10 v 10 h -10 Z M 384 50 h 10 v 10 h -10 Z M 384 60 h 10 v 10 h -10 Z M 374 70 h 10 v 10 h -10 Z M 384 70 h 10 v 10 h -10 Z M 394 70 h 10 v 10 h -10 Z M 418 10 h 10 v 10 h -10 Z M 418 20 h 10 v 10 h -10 Z M 418 30 h 10 v 10 h -10 Z M 418 40 h 10 v 10 h -10 Z M 418 50 h 10 v 10 h -10 Z M 418 60 h 10 v 10 h -10 Z M 418 70 h 10 v 10 h -10 Z M 428 70 h 10 v 10 h -10 Z M 438 70 h 10 v 10 h -10 Z M 448 70 h 10 v 10 h -10 Z M 458 70 h 10 v 10 h -10 Z"/></svg>'

function OPMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 701.35 318.8"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M 255.05 255.04 L 255.05 318.8 L 63.77 318.8 L 63.77 255.04 Z M 0 255.04 L 0 63.77 L 63.77 63.77 L 63.77 255.04 Z M 63.77 63.77 L 63.77 0 L 255.05 0 L 255.05 63.77 Z M 255.05 255.04 L 255.05 63.77 L 318.8 63.77 L 318.8 255.04 Z"
      />
      <path
        fill="currentColor"
        d="M 382.55 318.8 L 382.55 0 L 637.6 0 L 637.6 63.77 L 446.32 63.77 L 446.32 127.52 L 637.6 127.52 L 637.6 191.29 L 446.32 191.29 L 446.32 318.8 Z M 637.6 127.52 L 637.6 63.77 L 701.35 63.77 L 701.35 127.52 Z"
      />
    </svg>
  )
}
