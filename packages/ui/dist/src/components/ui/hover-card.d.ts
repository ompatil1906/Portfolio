import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"

declare function HoverCard({
  ...props
}: PreviewCardPrimitive.Root.Props): import("react").JSX.Element
declare function HoverCardTrigger({
  ...props
}: PreviewCardPrimitive.Trigger.Props): import("react").JSX.Element
declare function HoverCardContent({
  className,
  side,
  sideOffset,
  align,
  alignOffset,
  positionMethod,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "positionMethod"
  >): import("react").JSX.Element
export { HoverCard, HoverCardContent, HoverCardTrigger }
