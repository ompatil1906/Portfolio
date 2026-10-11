import type { Metadata } from "next"
import { addQueryParams } from "@/utils/url"
import { CheckIcon } from "lucide-react"

import { SPONSORSHIP_URL, UTM_PARAMS, X_HANDLE } from "@/config/site"
import { jsonLdBreadcrumbList, JsonLdScript } from "@/lib/json-ld"
import { cn } from "@/lib/utils"
import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SponsorItem } from "@/features/sponsor/components/sponsor-item"
import { SPONSORS } from "@/features/sponsor/data"
import { SPONSOR_BENEFITS, SPONSOR_PLANS } from "@/features/sponsor/plans"
import type {
  Sponsor,
  SponsorTier,
  SponsorTierColumns,
} from "@/features/sponsor/types"
import { SPONSOR_TIERS } from "@/features/sponsor/types"

const title = "Sponsors"
const description =
  "Back the open-source work. Every sponsorship buys time to fix bugs, ship features, and keep the projects free for everyone."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sponsors",
  },
  openGraph: {
    url: "/sponsors",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

const SPONSORS_BY_TIER = SPONSORS.reduce(
  (acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = []
    }
    acc[sponsor.tier].push(sponsor)
    return acc
  },
  {} as Record<SponsorTier, Sponsor[]>
)

export default function Page() {
  return (
    <>
      <JsonLdScript
        data={jsonLdBreadcrumbList([
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Sponsors",
            href: "/sponsors",
          },
        ])}
      />

      <div>
        <PageHeading>
          <PageHeadingTagline>Sponsors</PageHeadingTagline>
          <PageHeadingTitle>Backed by the community.</PageHeadingTitle>
          <PageHeadingDescription>
            I build and maintain open-source projects in the open. Your
            sponsorship buys back time to fix bugs, ship features, and keep
            everything free for everyone.
          </PageHeadingDescription>
        </PageHeading>

        <div className="h-4" />

        <div className="screen-line-bottom h-px" />

        <h2 className="p-4 font-heading text-sm/none font-medium tracking-wider text-muted-foreground">
          What you&apos;ll get as a sponsor
        </h2>

        <ul className="grid grid-cols-1 gap-3 px-4 pb-4 sm:grid-cols-2">
          {SPONSOR_BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-2.5 text-sm text-balance text-muted-foreground"
            >
              <CheckIcon
                className="mt-0.5 size-4 shrink-0 text-foreground"
                aria-hidden
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <h2 className="screen-line-top p-4 font-heading text-sm/none font-medium tracking-wider text-muted-foreground">
          Sponsorship tiers
        </h2>

        <ul className="grid grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-2">
          {SPONSOR_PLANS.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col gap-1.5 rounded-xl border bg-surface p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-heading text-base font-medium">
                  {plan.name}
                </span>
                <span className="text-sm text-muted-foreground tabular-nums">
                  ${plan.price}
                  <span className="text-xs">/mo</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="screen-line-top flex flex-col items-center gap-2 py-6">
          <iframe
            src={`${SPONSORSHIP_URL}/button`}
            title="Sponsor ompatil1906"
            height={32}
            width={114}
            style={{ border: 0, borderRadius: 6 }}
          />
          <p className="text-xs text-muted-foreground">
            Secure checkout on GitHub. Cancel anytime.
          </p>
        </div>

        {SPONSOR_TIERS.map((tier) => (
          <SponsorsGroup
            key={tier.name}
            title={tier.title}
            columns={tier.columns}
            sponsors={SPONSORS_BY_TIER[tier.name] ?? []}
          />
        ))}

        <div className="screen-line-top h-4" />
      </div>
    </>
  )
}

// Logos share a 320x96 viewBox, so min-height follows the logo width.
const GRID_LAYOUTS: Record<
  SponsorTierColumns,
  { grid: string; guides: string[]; rowStart: string; item: string }
> = {
  2: {
    grid: "sm:grid-cols-2",
    guides: ["border-r", "border-l"],
    rowStart: "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom",
    item: "min-h-22.5 [&_svg]:max-w-75",
  },
  3: {
    grid: "sm:grid-cols-3",
    guides: ["border-r", "border-x", "border-l"],
    rowStart: "sm:nth-[3n+1]:screen-line-top sm:nth-[3n+1]:screen-line-bottom",
    item: "min-h-15 [&_svg]:max-w-50",
  },
}

function SponsorsGroup({
  title,
  columns,
  sponsors,
}: {
  title: string
  columns: SponsorTierColumns
  sponsors: Sponsor[]
}) {
  if (sponsors.length === 0) {
    return null
  }

  const layout = GRID_LAYOUTS[columns]

  return (
    <div>
      <h2 className="screen-line-top p-4 font-heading text-sm/none font-medium tracking-wider text-muted-foreground">
        {title}
      </h2>

      <div className="relative">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden",
            layout.grid
          )}
        >
          {layout.guides.map((guide, index) => (
            <div key={index} className={cn("border-line", guide)} />
          ))}
        </div>

        <ul className={cn("grid grid-cols-1 gap-4", layout.grid)}>
          {sponsors.map((item) => (
            <li
              key={item.name}
              className={cn(
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                layout.rowStart
              )}
            >
              <SponsorItem
                href={addQueryParams(item.url, UTM_PARAMS)}
                aria-label={`${item.name} logo`}
                data-tier={item.tier.replaceAll("_", "-")}
                className={cn("[&_svg]:w-full [&_svg]:shrink-0", layout.item)}
              >
                <item.logo aria-hidden />
              </SponsorItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
