import type { ComponentProps } from "react"

type AppleCarouselItemState = {
  /** Position of the item among the items passed to `AppleCarouselContent`. */
  index: number
  /** Whether the item is the one being shown. */
  isCurrent: boolean
  /** Whether this copy is a clone rendered to keep the loop seamless. */
  isClone: boolean
}
/**
 * State of the enclosing item. Content also renders in loop clones, so check
 * `isClone` before starting media, fetching, or tracking impressions.
 */
declare function useAppleCarouselItem(): AppleCarouselItemState
type AppleCarouselRootProps = ComponentProps<"div"> & {
  /**
   * Time each card stays up during autoplay (ms).
   * @defaultValue 5000
   */
  duration?: number
}
declare function AppleCarouselRoot({
  duration,
  className,
  ...props
}: AppleCarouselRootProps): import("react").JSX.Element
declare function AppleCarouselContent({
  className,
  children,
  ...props
}: ComponentProps<"div">): import("react").JSX.Element
declare function AppleCarouselItem({
  className,
  ...props
}: ComponentProps<"li">): import("react").JSX.Element
type AppleCarouselControlsProps = ComponentProps<"div"> & {
  /**
   * Size of the tab list and play button inside.
   * @defaultValue "default"
   */
  size?: "default" | "sm"
}
declare function AppleCarouselControls({
  size,
  className,
  ...props
}: AppleCarouselControlsProps): import("react").JSX.Element
declare function AppleCarouselTabList({
  className,
  children,
  ...props
}: ComponentProps<"div">): import("react").JSX.Element
declare function AppleCarouselTab({
  className,
  children,
  onClick,
  onFocus,
  onKeyDown,
  ...props
}: ComponentProps<"button">): import("react").JSX.Element
declare function AppleCarouselPlayButton({
  className,
  onClick,
  ...props
}: ComponentProps<"button">): import("react").JSX.Element
export {
  AppleCarouselContent,
  AppleCarouselControls,
  AppleCarouselItem,
  AppleCarouselPlayButton,
  AppleCarouselRoot,
  AppleCarouselTab,
  AppleCarouselTabList,
  useAppleCarouselItem,
}
export type {
  AppleCarouselControlsProps,
  AppleCarouselItemState,
  AppleCarouselRootProps,
}
