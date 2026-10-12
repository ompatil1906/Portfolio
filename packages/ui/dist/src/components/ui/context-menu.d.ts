import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"

declare function ContextMenu({
  ...props
}: ContextMenuPrimitive.Root.Props): React.JSX.Element
declare function ContextMenuPortal({
  ...props
}: ContextMenuPrimitive.Portal.Props): React.JSX.Element
declare function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props): React.JSX.Element
declare function ContextMenuContent({
  className,
  align,
  alignOffset,
  side,
  sideOffset,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >): React.JSX.Element
declare function ContextMenuGroup({
  ...props
}: ContextMenuPrimitive.Group.Props): React.JSX.Element
declare function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}): React.JSX.Element
declare function ContextMenuItem({
  className,
  inset,
  variant,
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}): React.JSX.Element
declare function ContextMenuSub({
  ...props
}: ContextMenuPrimitive.SubmenuRoot.Props): React.JSX.Element
declare function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}): React.JSX.Element
declare function ContextMenuSubContent({
  ...props
}: React.ComponentProps<typeof ContextMenuContent>): React.JSX.Element
declare function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}): React.JSX.Element
declare function ContextMenuRadioGroup({
  ...props
}: ContextMenuPrimitive.RadioGroup.Props): React.JSX.Element
declare function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean
}): React.JSX.Element
declare function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props): React.JSX.Element
declare function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">): React.JSX.Element
export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
}
