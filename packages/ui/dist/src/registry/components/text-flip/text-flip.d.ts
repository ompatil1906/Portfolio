import type { Transition, Variants } from "motion/react"
import { motion } from "motion/react"

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.code
export type TextFlipProps = {
  /**
   * Motion element to render.
   * @defaultValue motion.p
   * */
  as?: MotionElement
  className?: string
  /** Array of children to cycle through. */
  children: React.ReactNode[]
  /**
   * Time in seconds between each flip.
   * @defaultValue 2
   * */
  interval?: number
  /**
   * Motion transition configuration.
   * @defaultValue { duration: 0.3 }
   * */
  transition?: Transition
  /** Motion variants for enter/exit animations. */
  variants?: Variants
  /** Controls whether the flip animation runs. */
  play?: boolean
  /** Called with the new index after each flip. */
  onIndexChange?: (index: number) => void
}
export declare function TextFlip({
  as: Component,
  className,
  children,
  interval,
  transition,
  variants,
  play,
  onIndexChange,
}: TextFlipProps): import("react").JSX.Element
export {}
