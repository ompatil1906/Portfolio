import type { ComponentProps } from "react"
import { motion } from "motion/react"

export type AppleHelloEffectEnglishProps = Omit<
  ComponentProps<typeof motion.svg>,
  "durationScale" | "onAnimationComplete"
> & {
  /**
   * Scales the duration and delay of the handwriting animation.
   * Values below 1 speed up, values above 1 slow down.
   * @defaultValue 1
   */
  durationScale?: number
  /** Called when the full handwriting animation completes. */
  onAnimationComplete?: () => void
}
export declare function AppleHelloEffectEnglish({
  className,
  durationScale,
  onAnimationComplete,
  ...props
}: AppleHelloEffectEnglishProps): import("react").JSX.Element
