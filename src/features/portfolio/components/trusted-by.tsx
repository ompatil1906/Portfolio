import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { XIcon } from "@/components/icons"
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
    <Panel id={ID} className="overflow-x-clip screen-line-bottom-none">
      {/* Header: Trusted by top builders on X */}
      <div className="screen-line-bottom flex items-center justify-center gap-1.5 py-3 text-center text-xs font-medium tracking-wide text-muted-foreground @2xl:text-sm">
        <span>Trusted by top builders on</span>
        <XIcon className="inline size-3.5 text-foreground" />
      </div>

      {/* 3 unique testimonial cards without repetition */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card block h-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <TestimonialSpotlight className="h-full">
              <Testimonial>
                <TestimonialQuote className="min-h-12 font-sans text-sm">
                  <p>{renderQuoteText(item.quote)}</p>
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
]

// Om Patil portfolio
