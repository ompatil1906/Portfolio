"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

/**
 * An SVG mark whose outline is traced by a gradient highlight that follows the
 * cursor, paired with a springy press effect and a tactile click sound.
 *
 * Swap the SVG paths below for your own artwork. The interaction is driven by:
 * - a `radialGradient` whose center springs toward the pointer (the spotlight),
 *   reused as a second stroke layered over the base outline.
 * - `whileTap="pressed"` morphing the path `d` values between two states.
 *
 * The demo mark was designed by ncdai on Figma with the
 * [Fast Isometric Plugin](https://www.figma.com/community/plugin/1249759048471403961).
 * Inspired by tailwindcss.com.
 */
export function SpotlightLogo() {
  const id = useId()
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    faceFill: `spotlight-logo-face-fill-${id}`,
    stroke: `spotlight-logo-stroke-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        {/* y, not a transform string: Motion runs those on WAAPI, which the
            <use> copies don't follow, so the hatch drifts off the outline. */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              y: 0,
            },
            pressed: {
              y: 16,
            },
          }}
          transition={transition}
        >
          {/* O letter top face (outer diamond with inner hole) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M166.77 0.58L333.05 96.58L166.77 192.58L0.50 96.58Z M166.77 64.58L111.35 96.58L166.77 128.58L222.20 96.58Z"
          />
          {/* P letter top face (stem + bowl with counter hole) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.92 192.58L388.47 0.58L443.90 32.58L554.75 96.58L443.90 160.58L333.05 96.58L111.35 224.58Z M499.32 64.58L388.47 64.58L388.47 128.58L499.32 128.58Z"
          />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // O outer
                "M166.77 0.58 L333.05 96.58 L166.77 192.58 L0.50 96.58 L166.77 0.58",
                "M333.05 96.58 L333.05 128.58 L166.77 224.58 L0.50 128.58 L0.50 96.58",
                "M166.77 192.58 L166.77 224.58",
                // O inner
                "M166.77 64.58 L222.20 96.58 L166.77 128.58 L111.35 96.58 L166.77 64.58",
                "M222.20 96.58 L222.20 128.58 L166.77 160.58 L111.35 128.58 L111.35 96.58",
                "M166.77 128.58 L166.77 160.58",
                // P outer
                "M55.92 192.58 L388.47 0.58 L443.90 32.58 L554.75 96.58 L443.90 160.58 L333.05 96.58 L111.35 224.58 L55.92 192.58",
                "M554.75 96.58 L554.75 128.58 L443.90 192.58 L333.05 128.58 L111.35 256.58 L55.92 224.58 L55.92 192.58",
                "M443.90 160.58 L443.90 192.58",
                "M333.05 96.58 L333.05 128.58",
                "M111.35 224.58 L111.35 256.58",
                // P counter
                "M499.32 64.58 L499.32 128.58 L388.47 128.58 L388.47 64.58 L499.32 64.58",
                "M499.32 128.58 L499.32 160.58 L388.47 160.58 L388.47 96.58 L388.47 64.58",
                "M388.47 128.58 L388.47 160.58",
              ].join(""),
            },
            pressed: {
              d: [
                // O outer pressed
                "M166.77 16.58 L333.05 112.58 L166.77 208.58 L0.50 112.58 L166.77 16.58",
                "M333.05 112.58 L333.05 128.58 L166.77 224.58 L0.50 128.58 L0.50 112.58",
                "M166.77 208.58 L166.77 224.58",
                // O inner pressed
                "M166.77 80.58 L222.20 112.58 L166.77 144.58 L111.35 112.58 L166.77 80.58",
                "M222.20 112.58 L222.20 128.58 L166.77 160.58 L111.35 128.58 L111.35 112.58",
                "M166.77 144.58 L166.77 160.58",
                // P outer pressed
                "M55.92 208.58 L388.47 16.58 L443.90 48.58 L554.75 112.58 L443.90 176.58 L333.05 112.58 L111.35 240.58 L55.92 208.58",
                "M554.75 112.58 L554.75 128.58 L443.90 192.58 L333.05 128.58 L111.35 256.58 L55.92 224.58 L55.92 208.58",
                "M443.90 176.58 L443.90 192.58",
                "M333.05 112.58 L333.05 128.58",
                "M111.35 240.58 L111.35 256.58",
                // P counter pressed
                "M499.32 80.58 L499.32 144.58 L388.47 144.58 L388.47 80.58 L499.32 80.58",
                "M499.32 144.58 L499.32 160.58 L388.47 160.58 L388.47 96.58 L388.47 80.58",
                "M388.47 144.58 L388.47 160.58",
              ].join(""),
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        {/* O right side face */}
        <motion.path
          variants={{
            normal: {
              d: "M333.05 96.58L333.05 128.58L166.77 224.58L166.77 192.58Z",
            },
            pressed: {
              d: "M333.05 112.58L333.05 128.58L166.77 224.58L166.77 208.58Z",
            },
          }}
          transition={transition}
        />
        {/* O left side face */}
        <motion.path
          variants={{
            normal: {
              d: "M166.77 192.58L166.77 224.58L0.50 128.58L0.50 96.58Z",
            },
            pressed: {
              d: "M166.77 208.58L166.77 224.58L0.50 128.58L0.50 112.58Z",
            },
          }}
          transition={transition}
        />
        {/* P bowl right side face */}
        <motion.path
          variants={{
            normal: {
              d: "M554.75 96.58L554.75 128.58L443.90 192.58L443.90 160.58Z",
            },
            pressed: {
              d: "M554.75 112.58L554.75 128.58L443.90 192.58L443.90 176.58Z",
            },
          }}
          transition={transition}
        />
        {/* P bowl inside face */}
        <motion.path
          variants={{
            normal: {
              d: "M443.90 160.58L443.90 192.58L333.05 128.58L333.05 96.58Z",
            },
            pressed: {
              d: "M443.90 176.58L443.90 192.58L333.05 128.58L333.05 112.58Z",
            },
          }}
          transition={transition}
        />
        {/* P stem right side face */}
        <motion.path
          variants={{
            normal: {
              d: "M333.05 96.58L333.05 128.58L111.35 256.58L111.35 224.58Z",
            },
            pressed: {
              d: "M333.05 112.58L333.05 128.58L111.35 256.58L111.35 240.58Z",
            },
          }}
          transition={transition}
        />
        {/* P stem bottom face */}
        <motion.path
          variants={{
            normal: {
              d: "M111.35 224.58L111.35 256.58L55.92 224.58L55.92 192.58Z",
            },
            pressed: {
              d: "M111.35 240.58L111.35 256.58L55.92 224.58L55.92 208.58Z",
            },
          }}
          transition={transition}
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />
    </motion.svg>
  )
}
