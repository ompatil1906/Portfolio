import type { AnimatePresenceProps, HTMLMotionProps } from "motion/react"
import { motion } from "motion/react"

export declare function IconSwap(
  props: React.PropsWithChildren<AnimatePresenceProps>
): import("react").JSX.Element
type MotionElement = typeof motion.div | typeof motion.span
export declare function IconSwapItem({
  as: Component,
  ...props
}: HTMLMotionProps<"div"> & {
  as?: MotionElement
}): import("react").JSX.Element
export {}
