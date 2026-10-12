import type { ReactNode } from "react"

/** Direction the wave sweeps across the columns. */
type WaveDirection = "ltr" | "rtl"
export type LogosCarouselProps = {
  /** Logo elements to cycle through. Each child is rendered as a single logo. */
  children: ReactNode
  /**
   * Number of columns to spread the logos across. Capped at the number of logos.
   * @defaultValue 4
   */
  columnCount?: number
  /**
   * Direction the ripple travels: left-to-right or right-to-left.
   * @defaultValue "ltr"
   */
  direction?: WaveDirection
  className?: string
}
export declare function LogosCarousel({
  children,
  columnCount,
  direction,
  className,
}: LogosCarouselProps): import("react").JSX.Element
export {}
