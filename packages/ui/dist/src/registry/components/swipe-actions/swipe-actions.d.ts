import type { ComponentProps } from "react"
import * as SwipeActionsPrimitive from "@ncdai/react-swipe-actions"

type SwipeSide = SwipeActionsPrimitive.SwipeSide
type SwipeState = SwipeActionsPrimitive.SwipeState
declare const SwipeRoot: typeof SwipeActionsPrimitive.SwipeRoot
declare const SwipeItem: typeof SwipeActionsPrimitive.SwipeItem
declare const SwipeActions: typeof SwipeActionsPrimitive.SwipeActions
declare function SwipeAction({
  className,
  children,
  ...props
}: ComponentProps<
  typeof SwipeActionsPrimitive.SwipeAction
>): import("react").JSX.Element
declare function SwipeContent({
  className,
  ...props
}: ComponentProps<
  typeof SwipeActionsPrimitive.SwipeContent
>): import("react").JSX.Element
export { SwipeAction, SwipeActions, SwipeContent, SwipeItem, SwipeRoot }
export type { SwipeSide, SwipeState }
