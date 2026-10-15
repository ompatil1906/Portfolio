"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LinkedInIcon, XIcon } from "@/components/icons"
import { LogosCarousel } from "@/components/logos-carousel"
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/registry/components/testimonial"
import { TestimonialSpotlight } from "@/registry/components/testimonial-spotlight"
import { Twemoji } from "@/registry/components/twemoji"
import { SAMPLE_LOGOS } from "@/features/sponsor/data"

import { HandwrittenArrow, HandwrittenNote } from "./handwritten-note"
import { Panel } from "./panel"

const ID = "trusted-by"

export type TestimonialType = {
  authorAvatar: string
  authorName: string
  authorTagline: string
  url: string
  quote: string
}

export function TrustedBy() {
  return (
    <Panel id={ID} className="screen-line-bottom-none">
      <HandwrittenNote
        className="top-6 right-full mr-3 hidden w-20 flex-col items-end lg:flex"
        aria-hidden
      >
        <span className="-rotate-6">big thanks</span>
        <HandwrittenArrow className="size-7 -scale-x-100 -rotate-6" />
      </HandwrittenNote>

      {/* Header: Special thanks to the technologies powering this */}
      <div className="screen-line-bottom flex items-center justify-center gap-1.5 py-3 text-center text-xs font-medium tracking-wide text-muted-foreground @2xl:text-sm">
        <span>Special thanks to the technologies powering this</span>
      </div>

      {/* Logos carousel */}
      <div className="screen-line-bottom relative overflow-hidden px-4 py-2">
        <LogosCarousel className="w-full py-4 text-foreground max-sm:[--column-count:3] sm:[--column-count:4]">
          {SAMPLE_LOGOS.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-opacity hover:opacity-75 focus-visible:outline-none"
              title={sponsor.name}
            >
              <sponsor.logo
                className="h-auto w-full scale-105"
                aria-label={sponsor.name}
              />
            </a>
          ))}
        </LogosCarousel>
      </div>

      {/* Header: Trusted by people on X & LinkedIn */}
      <div className="screen-line-bottom flex items-center justify-center gap-1.5 py-3 text-center text-xs font-medium tracking-wide text-muted-foreground @2xl:text-sm">
        <span>Trusted by people on</span>
        <XIcon className="inline size-3.5 text-foreground" />
        <span className="text-muted-foreground/60">&</span>
        <LinkedInIcon className="inline size-3.5 text-foreground" />
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-6">
        {TESTIMONIALS.map((item, index) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group/card block h-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              index < 2 ? "sm:col-span-3" : "sm:col-span-2"
            )}
          >
            <TestimonialSpotlight className="h-full">
              <Testimonial>
                <TestimonialQuote className="min-h-12 font-sans text-sm">
                  <ExpandableQuote quote={item.quote} />
                </TestimonialQuote>

                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <TestimonialAvatarImg
                      src={item.authorAvatar}
                      alt={item.authorName}
                    />
                    <TestimonialAvatarRing />
                  </TestimonialAvatar>

                  <TestimonialAuthorName>
                    {item.authorName}
                  </TestimonialAuthorName>
                  <TestimonialAuthorTagline>
                    {item.authorTagline}
                  </TestimonialAuthorTagline>
                </TestimonialAuthor>
              </Testimonial>
            </TestimonialSpotlight>
          </a>
        ))}
      </div>

      {/* Button: All builders -> */}
      <div className="flex justify-center py-4">
        <Button
          variant="secondary"
          size="sm"
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          nativeButton={false}
          render={
            <a
              href="https://x.com/search?q=%40Om_Patil19"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          All builders
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </Panel>
  )
}

function getTruncatedText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  const sliced = text.slice(0, maxLength)
  const lastSpace = sliced.lastIndexOf(" ")
  const trimmed = (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced).trim()
  return trimmed.replace(/[,;:]+$/, "")
}

function ExpandableQuote({
  quote,
  maxLength = 35,
}: {
  quote: string
  maxLength?: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (quote.length <= maxLength) {
    return <p>{renderQuoteText(quote)}</p>
  }

  const truncatedText = getTruncatedText(quote, maxLength)

  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsExpanded((prev) => !prev)
  }

  return (
    <p>
      {renderQuoteText(isExpanded ? quote : truncatedText)}
      {!isExpanded && (
        <span className="text-muted-foreground/70 select-none"> ... </span>
      )}
      <span
        role="button"
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle(e)
          }
        }}
        className={cn(
          "inline-block cursor-pointer font-medium text-primary select-none hover:underline focus-visible:outline-none",
          isExpanded ? "ml-1.5" : ""
        )}
      >
        {isExpanded ? "less" : "more"}
      </span>
    </p>
  )
}

function renderQuoteText(quote: string) {
  const parts = quote.split(/(@\w+)/g)
  return parts.map((part, i) =>
    part.startsWith("@") ? (
      <span key={i} className="font-medium text-primary">
        {part}
      </span>
    ) : (
      <Twemoji key={i} className="inline-block size-4 align-text-bottom">
        {part}
      </Twemoji>
    )
  )
}

const TESTIMONIALS: TestimonialType[] = [
  {
    authorAvatar: "/images/avatars/krupapatil.png",
    authorName: "Krupa Patil",
    authorTagline: "Technology Lead at Infosys",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7515069808468582400/?dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287516006988640575488%2Curn%3Ali%3Aactivity%3A7515069808468582400%29",
    quote:
      "Congrats on the launch, Om! \u{1F680} It’s refreshing to see a portfolio focused on shipping practical AI products rather than just building quick demos. The inclusion of the 40+ free UI components and blocks is an awesome addition for the dev community. Looking forward to checking out the agentic workflows!",
  },
  {
    authorAvatar: "/images/avatars/atharvachitambar.jpg",
    authorName: "Atharva Chitambar",
    authorTagline: "Marketing Analyst at DeltaX",
    url: "https://www.linkedin.com/posts/om-patil19_om-patil-ai-engineer-genai-agentic-systems-activity-7515069808468582400-h10O",
    quote: "Keep up the good work Om!!",
  },
  {
    authorAvatar: "/images/avatars/shridhar9700.jpg",
    authorName: "Shridhar Patil",
    authorTagline: "@shridhar9700 on X",
    url: "https://x.com/shridhar9700/status/2109267596365455549",
    quote: "@Om_Patil19 Impressive !!!",
  },
  {
    authorAvatar: "/images/avatars/iamnitin_47.jpg",
    authorName: "Nitin Shinde",
    authorTagline: "@iamnitin_47 on X",
    url: "https://x.com/iamnitin_47/status/2109277664699895965",
    quote: "@Om_Patil19 Absolutely \u{1F525}",
  },
  {
    authorAvatar: "/images/avatars/swarooppatilx.jpg",
    authorName: "Swaroop",
    authorTagline: "@swarooppatilx on X",
    url: "https://x.com/swarooppatilx/status/2109268585105490253",
    quote: "@Om_Patil19 great work!",
  },
  {
    authorAvatar: "/images/avatars/rohittmore.jpg",
    authorName: "rσнιт ☘️",
    authorTagline: "@rohittmore on X",
    url: "https://x.com/rohittmore/status/2109396177993306330",
    quote: "@Om_Patil19 Clean work.",
  },
  {
    authorAvatar: "/images/avatars/vedantkolte.png",
    authorName: "Vedant Kolte",
    authorTagline: "@VedantKolt80806 on X",
    url: "https://x.com/VedantKolt80806/status/2109511306277711909",
    quote: "@Om_Patil19 Impressive work!",
  },
  {
    authorAvatar: "/images/avatars/rajlaxmi1905.jpg",
    authorName: "Rajlaxmi",
    authorTagline: "@Rajlaxmi1905 on X",
    url: "https://x.com/Rajlaxmi1905/status/2109391273333522740",
    quote: "@Om_Patil19 Nice work om👏",
  },
]

// Om Patil portfolio
