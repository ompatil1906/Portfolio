import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { XIcon } from "@/components/icons"
import {
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
} from "@/registry/components/testimonial"
import { TestimonialSpotlight } from "@/registry/components/testimonial-spotlight"

import { TESTIMONIALS } from "../data/testimonials"
import {
  Panel,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "trusted-by"

export function TrustedBy() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Trusted by</a>
          <PanelTitleSup>({TESTIMONIALS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>

        <PanelDescription>
          Feedback and appreciation from developers and friends.
        </PanelDescription>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <ListItem key={item.url}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card block h-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <TestimonialSpotlight className="h-full min-h-36 border border-line bg-card/40 transition-colors hover:border-foreground/20 hover:bg-card">
                  <div className="flex h-full flex-col justify-between p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <TestimonialAvatar className="size-10">
                          <TestimonialAvatarImg
                            src={item.authorAvatar}
                            alt={item.authorName}
                            className="size-10"
                          />
                          <TestimonialAvatarRing />
                        </TestimonialAvatar>

                        <div>
                          <div className="text-sm font-semibold text-foreground">
                            {item.authorName}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.authorTagline}
                          </div>
                        </div>
                      </div>

                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors group-hover/card:text-foreground">
                        <XIcon className="size-3.5" />
                        <span className="sr-only">View on X</span>
                      </div>
                    </div>

                    <blockquote className="my-3 text-base text-pretty text-foreground">
                      <p>{renderQuote(item.quote)}</p>
                    </blockquote>

                    <div className="flex items-center justify-between border-t border-line/60 pt-2.5 text-xs text-muted-foreground">
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                      <span className="flex items-center gap-1 opacity-0 transition-opacity group-hover/card:opacity-100">
                        View post
                        <ArrowUpRight className="size-3" />
                      </span>
                    </div>
                  </div>
                </TestimonialSpotlight>
              </a>
            </ListItem>
          ))}
        </ul>
      </div>
    </Panel>
  )
}

function ListItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "max-sm:screen-line-top max-sm:screen-line-bottom",
        "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom",
        className
      )}
      {...props}
    />
  )
}

function renderQuote(quote: string) {
  if (quote.startsWith("@Om_Patil19 ")) {
    return (
      <>
        <span className="font-medium text-primary">@Om_Patil19</span>{" "}
        {quote.slice("@Om_Patil19 ".length)}
      </>
    )
  }
  return quote
}

function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

// Om Patil portfolio
