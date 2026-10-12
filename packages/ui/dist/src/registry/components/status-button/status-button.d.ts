import { Button } from "@/components/ui/button"

export type ButtonStatus = "idle" | "loading" | "success"
export type StatusButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "onClick" | "children"
> & {
  children: React.ReactNode
  /**
   * Uncontrolled mode: loading while the returned promise is pending, then
   * success. Omit it when the form owns the submission.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
  /** Controlled mode, e.g. derived from `useActionState`. */
  status?: ButtonStatus
  /** Also called for the automatic return to idle after `successDuration`. */
  onStatusChange?: (status: ButtonStatus) => void
  /** Shown next to the check icon, e.g. "Submitted" for a "Submit" button. */
  successLabel?: React.ReactNode
  successDuration?: number
}
export declare function StatusButton({
  children,
  className,
  onClick,
  status: statusProp,
  onStatusChange,
  successLabel,
  successDuration,
  ...props
}: StatusButtonProps): import("react").JSX.Element
