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
 * This mark spells "OP" over an isometric lattice: the "O" is an extruded
 * diamond ring, the "P" a stem and bowl sharing the same ground plane. The
 * interaction is adapted from the SpotlightLogo by ncdai, whose demo mark was
 * drawn on Figma with the
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

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 400]), {
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
      viewBox="-5.91 -3.58 556 400"
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
            d="M166.77 166.98L333.05 262.98L166.77 358.98L0.50 262.98Z M166.77 230.98L111.35 262.98L166.77 294.98L222.20 262.98Z"
          />
          {/* P letter top face (stem + bowl with counter hole) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M488.26 289.86L155.70 97.86L211.12 65.86L321.98 1.86L432.83 65.86L321.98 129.86L543.68 257.86Z M321.98 33.86L377.40 65.86L321.98 97.86L266.55 65.86Z"
          />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // O outer
                "M166.77 166.98 L333.05 262.98 L166.77 358.98 L0.50 262.98 L166.77 166.98",
                "M333.05 262.98 L333.05 294.98 L166.77 390.98 L0.50 294.98 L0.50 262.98",
                "M166.77 358.98 L166.77 390.98",
                // O inner
                "M166.77 230.98 L222.20 262.98 L166.77 294.98 L111.35 262.98 L166.77 230.98",
                "M222.20 262.98 L222.20 294.98 L166.77 326.98 L111.35 294.98 L111.35 262.98",
                "M166.77 294.98 L166.77 326.98",
                // P outer
                "M488.26 289.86 L155.70 97.86 L211.12 65.86 L321.98 1.86 L432.83 65.86 L321.98 129.86 L543.68 257.86 L488.26 289.86",
                "M543.68 257.86 L543.68 289.86 L488.26 321.86 L155.70 129.86 L155.70 97.86",
                "M488.26 289.86 L488.26 321.86",
                "M432.83 65.86 L432.83 97.86 L321.98 161.86 L321.98 129.86",
                // P counter
                "M321.98 33.86 L377.40 65.86 L321.98 97.86 L266.55 65.86 L321.98 33.86",
                "M377.40 65.86 L377.40 97.86 L321.98 129.86 L266.55 97.86 L266.55 65.86",
                "M321.98 97.86 L321.98 129.86",
              ].join(""),
            },
            pressed: {
              d: [
                // O outer pressed
                "M166.77 182.98 L333.05 278.98 L166.77 374.98 L0.50 278.98 L166.77 182.98",
                "M333.05 278.98 L333.05 294.98 L166.77 390.98 L0.50 294.98 L0.50 278.98",
                "M166.77 374.98 L166.77 390.98",
                // O inner pressed
                "M166.77 246.98 L222.20 278.98 L166.77 310.98 L111.35 278.98 L166.77 246.98",
                "M222.20 278.98 L222.20 294.98 L166.77 326.98 L111.35 294.98 L111.35 278.98",
                "M166.77 310.98 L166.77 326.98",
                // P outer pressed
                "M488.26 305.86 L155.70 113.86 L211.12 81.86 L321.98 17.86 L432.83 81.86 L321.98 145.86 L543.68 273.86 L488.26 305.86",
                "M543.68 273.86 L543.68 289.86 L488.26 321.86 L155.70 129.86 L155.70 113.86",
                "M488.26 305.86 L488.26 321.86",
                "M432.83 81.86 L432.83 97.86 L321.98 161.86 L321.98 145.86",
                // P counter pressed
                "M321.98 49.86 L377.40 81.86 L321.98 113.86 L266.55 81.86 L321.98 49.86",
                "M377.40 81.86 L377.40 97.86 L321.98 129.86 L266.55 97.86 L266.55 81.86",
                "M321.98 113.86 L321.98 129.86",
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
              d: "M333.05 262.98L333.05 294.98L166.77 390.98L166.77 358.98Z",
            },
            pressed: {
              d: "M333.05 278.98L333.05 294.98L166.77 390.98L166.77 374.98Z",
            },
          }}
          transition={transition}
        />
        {/* O left side face */}
        <motion.path
          variants={{
            normal: {
              d: "M166.77 358.98L166.77 390.98L0.50 294.98L0.50 262.98Z",
            },
            pressed: {
              d: "M166.77 374.98L166.77 390.98L0.50 294.98L0.50 278.98Z",
            },
          }}
          transition={transition}
        />
        {/* P stem side face */}
        <motion.path
          variants={{
            normal: {
              d: "M488.26 289.86L155.70 97.86L155.70 129.86L488.26 321.86Z",
            },
            pressed: {
              d: "M488.26 305.86L155.70 113.86L155.70 129.86L488.26 321.86Z",
            },
          }}
          transition={transition}
        />
        {/* P bowl side face */}
        <motion.path
          variants={{
            normal: {
              d: "M432.83 65.86L321.98 129.86L321.98 161.86L432.83 97.86Z",
            },
            pressed: {
              d: "M432.83 81.86L321.98 145.86L321.98 161.86L432.83 97.86Z",
            },
          }}
          transition={transition}
        />
        {/* P stem end face */}
        <motion.path
          variants={{
            normal: {
              d: "M543.68 257.86L488.26 289.86L488.26 321.86L543.68 289.86Z",
            },
            pressed: {
              d: "M543.68 273.86L488.26 305.86L488.26 321.86L543.68 289.86Z",
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
