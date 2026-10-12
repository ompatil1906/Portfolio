import type { ReactNode } from "react"

export type LogosFlipProps = Omit<React.ComponentProps<"div">, "ref"> & {
  /** Logo elements to cycle through. Each child is rendered as a single logo. */
  children: ReactNode
  /**
   * Number of cards shown at once. Capped at the number of logos. The cards
   * sit in one row by default; set `--column-count` to wrap them onto fewer
   * columns.
   * @defaultValue 4
   */
  columnCount?: number
}
export declare function LogosFlip({
  children,
  columnCount,
  className,
  style,
  ...props
}: LogosFlipProps): import("react").JSX.Element | null
