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
        brandAssetsURL="https://assets.chanhdai.com/chanhdai-brand.zip"
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
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 701.35 318.8"><path fill="currentColor" d="M 255.05 255.04 L 255.05 318.8 L 63.77 318.8 L 63.77 255.04 Z M 0 255.04 L 0 63.77 L 63.77 63.77 L 63.77 255.04 Z M 63.77 63.77 L 63.77 0 L 255.05 0 L 255.05 63.77 Z M 255.05 255.04 L 255.05 63.77 L 318.8 63.77 L 318.8 255.04 Z"/><path fill="currentColor" d="M 382.55 318.8 L 382.55 0 L 637.6 0 L 637.6 63.77 L 446.32 63.77 L 446.32 191.29 L 637.6 191.29 L 637.6 255.04 L 446.32 255.04 L 446.32 318.8 Z M 637.6 191.29 L 637.6 63.77 L 701.35 63.77 L 701.35 191.29 Z"/></svg>'

const LOGOTYPE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 601.86 90.33"><path fill="currentColor" d="M 62.57 62.58 L 62.57 78.22 L 15.64 78.22 L 15.64 62.58 Z M 0 62.58 L 0 15.64 L 15.64 15.64 L 15.64 62.58 Z M 15.64 15.64 L 15.64 0 L 62.57 0 L 62.57 15.64 Z M 62.57 62.58 L 62.57 15.64 L 78.21 15.64 L 78.21 62.58 Z"/><path fill="currentColor" d="M 93.83 78.22 L 93.83 0 L 156.39 0 L 156.39 15.64 L 109.47 15.64 L 109.47 46.94 L 156.39 46.94 L 156.39 62.58 L 109.47 62.58 L 109.47 78.22 Z M 156.39 46.94 L 156.39 15.64 L 172.04 15.64 L 172.04 46.94 Z"/><path fill="currentColor" d="M 210.90 67.95 L 199.71 67.95 L 199.71 34.45 L 210.90 34.45 L 210.90 23.28 L 222.09 23.28 L 222.09 12.09 L 255.59 12.09 L 255.59 23.28 L 266.76 23.28 L 266.76 34.45 L 277.94 34.45 L 277.94 67.95 L 266.76 67.95 L 266.76 79.14 L 255.59 79.14 L 255.59 90.33 L 222.09 90.33 L 222.09 79.14 L 210.90 79.14 Z M 222.09 79.03 L 255.59 79.03 L 255.59 67.95 L 266.65 67.95 L 266.65 34.45 L 255.59 34.45 L 255.59 23.39 L 222.09 23.39 L 222.09 34.45 L 211.01 34.45 L 211.01 67.95 L 222.09 67.95 Z"/><path fill="currentColor" d="M 333.75 45.64 L 333.75 90.33 L 322.56 90.33 L 322.56 45.64 L 300.25 45.64 L 300.25 90.33 L 289.06 90.33 L 289.06 34.45 L 322.56 34.45 L 322.56 45.64 Z M 333.75 34.45 L 356.11 34.45 L 356.11 45.64 L 367.30 45.64 L 367.30 90.33 L 356.11 90.33 L 356.11 45.64 L 333.75 45.64 Z"/><path fill="currentColor" d="M 456.60 45.64 L 456.60 56.83 L 423.10 56.83 L 423.10 90.33 L 411.91 90.33 L 411.91 12.09 L 456.60 12.09 L 456.60 23.28 L 467.79 23.28 L 467.79 45.64 Z M 423.10 45.64 L 456.49 45.64 L 456.49 23.28 L 423.10 23.28 Z"/><path fill="currentColor" d="M 490.14 56.78 L 512.46 56.78 L 512.46 45.64 L 490.14 45.64 L 490.14 34.45 L 512.46 34.45 L 512.46 45.64 L 523.64 45.64 L 523.64 90.33 L 478.96 90.33 L 478.96 67.95 L 490.14 67.95 Z M 490.25 67.95 L 490.25 79.14 L 512.46 79.14 L 512.46 67.95 Z M 490.14 56.72 L 478.96 56.72 L 478.96 45.64 L 490.14 45.64 Z"/><path fill="currentColor" d="M 534.82 45.64 L 523.63 45.64 L 523.63 34.45 L 534.82 34.45 L 534.82 12.09 L 546 12.09 L 546 34.45 L 557.13 34.45 L 557.13 45.64 L 546 45.64 L 546 79.14 L 557.13 79.14 L 557.13 90.33 L 534.82 90.33 Z"/><path fill="currentColor" d="M 568.31 34.45 L 579.50 34.45 L 579.50 90.33 L 568.31 90.33 Z M 568.31 12.09 L 579.50 12.09 L 579.50 23.28 L 568.31 23.28 Z"/><path fill="currentColor" d="M 590.68 12.09 L 601.86 12.09 L 601.86 90.33 L 590.68 90.33 Z"/></svg>'

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
        d="M 382.55 318.8 L 382.55 0 L 637.6 0 L 637.6 63.77 L 446.32 63.77 L 446.32 191.29 L 637.6 191.29 L 637.6 255.04 L 446.32 255.04 L 446.32 318.8 Z M 637.6 191.29 L 637.6 63.77 L 701.35 63.77 L 701.35 191.29 Z"
      />
    </svg>
  )
}
