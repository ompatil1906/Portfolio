import * as React from "react"
import { motion } from "motion/react"

export type ShimmeringTextProps = Omit<
  React.ComponentProps<typeof motion.span>,
  "children"
> & {
  /** The text to render with the shimmering effect. */
  text: string
  /**
   * Duration in seconds for one shimmer cycle.
   * @defaultValue 1 */
  duration?: number
  /**
   * Whether the shimmer animation is paused.
   * @defaultValue false */
  isStopped?: boolean
}
export declare function ShimmeringText({
  text,
  duration,
  isStopped,
  className,
  ...props
}: ShimmeringTextProps): React.JSX.Element
