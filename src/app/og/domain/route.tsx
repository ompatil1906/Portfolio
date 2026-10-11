import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { clampParam } from "../params"

const geistMedium = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-Medium.ttf")
)

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")
)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const domain = clampParam(searchParams.get("domain"), 120)
  const isForSale = searchParams.get("sale") === "true"

  return new ImageResponse(
    <div tw="flex text-black bg-white w-full h-full p-16">
      <div tw="flex-1 flex flex-col justify-center border-l border-r border-zinc-200">
        <div tw="flex justify-center border-t border-b border-zinc-200">
          <h1
            tw="mt-8 mb-4 ml-8 mr-8"
            style={{
              fontFamily: "GeistSans",
              fontWeight: 600,
              fontSize: 88,
              letterSpacing: "-0.025em",
            }}
          >
            {domain}
          </h1>
        </div>

        <div tw="flex justify-center border-b border-zinc-200">
          <p
            tw="mt-0 mb-0 pt-4 pb-4 pl-8 pr-8"
            style={{
              fontFamily: "GeistSans",
              fontWeight: 500,
              fontSize: 32,
              color: isForSale ? "#22c55e" : "#71717a",
            }}
          >
            {isForSale
              ? "The domain name is for sale"
              : "The website will be launched soon"}
          </p>
        </div>
      </div>

      <div tw="absolute flex inset-y-0 w-px bg-zinc-200 left-16" />
      <div tw="absolute flex inset-y-0 w-px bg-zinc-200 right-16" />
      <div tw="absolute flex inset-x-0 h-px bg-zinc-200 top-16" />
      <div tw="absolute flex inset-x-0 h-px bg-zinc-200 bottom-16" />

      <div tw="absolute flex bottom-16 right-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 701.35 318.8"
          width={141}
          height={64}
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
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GeistSans",
          data: geistMedium,
          weight: 500,
        },
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=31536000, immutable",
      },
    }
  )
}
