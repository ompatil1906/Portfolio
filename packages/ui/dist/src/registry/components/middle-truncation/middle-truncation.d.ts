import React from "react"

type BaseProps = React.ComponentPropsWithoutRef<"span"> & {
  /** The text content to truncate. */
  children: string
  /** Custom ellipsis string to show in the middle. @default "..." */
  ellipsis?: string
}
export type MiddleTruncationProps = BaseProps &
  (
    | {
        /** Fixed number of characters to always preserve at the end. Cannot be used with minEnd. */
        end: number
        minEnd?: never
      }
    | {
        /** When splitting evenly, ensure at least this many characters at the end. Cannot be used with end. */
        minEnd: number
        end?: never
      }
    | {
        /** When neither end nor minEnd is provided, splits text evenly in the middle. */
        end?: never
        minEnd?: never
      }
  )
export declare function MiddleTruncation({
  className,
  children,
  end,
  minEnd,
  ellipsis,
  ...props
}: MiddleTruncationProps): React.JSX.Element
export {}
