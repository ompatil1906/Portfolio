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
        brandGuidelinesURL="https://ompatil1906.vercel.app/components/brand-assets-menu"
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
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M64 48H224V208H64V48ZM96 80H192V176H96V80ZM272 48H416V144H304V240H272V48ZM304 80H384V112H304V80Z"/></svg>'

const LOGOTYPE_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="1024" y="128" text-anchor="middle" dominant-baseline="central" font-family="Geist, Arial, sans-serif" font-weight="600" font-size="184" letter-spacing="4" fill="currentColor">Om Patil</text></svg>'

function OPMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 48H224V208H64V48ZM96 80H192V176H96V80ZM272 48H416V144H304V240H272V48ZM304 80H384V112H304V80Z"
      />
    </svg>
  )
}

const ChanhDaiMark = OPMark
