import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"

declare function Collapsible({
  ...props
}: CollapsiblePrimitive.Root.Props): import("react").JSX.Element
declare function CollapsibleTrigger({
  ...props
}: CollapsiblePrimitive.Trigger.Props): import("react").JSX.Element
declare function CollapsibleContent({
  ...props
}: CollapsiblePrimitive.Panel.Props): import("react").JSX.Element
export { Collapsible, CollapsibleContent, CollapsibleTrigger }
