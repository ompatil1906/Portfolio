import type { ComponentProps, ComponentPropsWithoutRef, JSX } from "react"
import { motion } from "motion/react"

export type SlideToUnlockRootProps = ComponentProps<"div"> & {
  /**
   * Width of the drag handle in pixels.
   * @defaultValue 56
   * */
  handleWidth?: number
  /** Called when the handle is dragged fully to the end. */
  onUnlock?: () => void
}
export declare function SlideToUnlock({
  className,
  handleWidth,
  children,
  onUnlock,
  ...props
}: SlideToUnlockRootProps): JSX.Element
export type SlideToUnlockTrackProps = ComponentProps<"div">
export declare function SlideToUnlockTrack({
  className,
  children,
  ...props
}: SlideToUnlockTrackProps): JSX.Element
export type SlideToUnlockTextProps = Omit<
  ComponentPropsWithoutRef<typeof motion.div>,
  "children"
> & {
  /**
   * Accepts a render function as `children` to react to the dragging state.
   *
   * @example
   * ```tsx
   * <SlideToUnlockText>
   *   {({ isDragging }) => <span>{isDragging ? "Release..." : "Slide to unlock"}</span>}
   * </SlideToUnlockText>
   * ```
   */
  children: JSX.Element | ((props: { isDragging: boolean }) => JSX.Element)
}
export declare function SlideToUnlockText({
  className,
  children,
  style,
  ...props
}: SlideToUnlockTextProps): JSX.Element
export type SlideToUnlockHandleProps = ComponentPropsWithoutRef<
  typeof motion.div
>
export declare function SlideToUnlockHandle({
  className,
  children,
  style,
  ...props
}: SlideToUnlockHandleProps): JSX.Element
