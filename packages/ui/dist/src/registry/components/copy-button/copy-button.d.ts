import type { ComponentProps } from "react"

import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button"

export type CopyStateIconProps = {
  state: CopyState
  /** Custom icon for idle state. */
  idleIcon?: React.ReactNode
  /** Custom icon for done state. */
  doneIcon?: React.ReactNode
  /** Custom icon for error state. */
  errorIcon?: React.ReactNode
}
export declare function CopyStateIcon({
  state,
  idleIcon,
  doneIcon,
  errorIcon,
}: CopyStateIconProps): import("react").JSX.Element
export type CopyButtonProps = ComponentProps<typeof Button> & {
  /** The text to copy, or a function that returns the text. */
  text: string | (() => string)
  /** Called with the copied text on successful copy. */
  onCopySuccess?: (text: string) => void
  /** Called with the error if the copy operation fails. */
  onCopyError?: (error: Error) => void
} & Omit<CopyStateIconProps, "state">
export declare function CopyButton({
  className,
  size,
  children,
  text,
  idleIcon,
  doneIcon,
  errorIcon,
  onClick,
  onCopySuccess,
  onCopyError,
  ...props
}: CopyButtonProps): import("react").JSX.Element
