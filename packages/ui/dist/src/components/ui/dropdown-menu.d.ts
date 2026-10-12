import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"

declare function DropdownMenu({
  ...props
}: MenuPrimitive.Root.Props): React.JSX.Element
declare function DropdownMenuPortal({
  ...props
}: MenuPrimitive.Portal.Props): React.JSX.Element
declare function DropdownMenuTrigger({
  ...props
}: MenuPrimitive.Trigger.Props): React.JSX.Element
declare function DropdownMenuContent({
  align,
  alignOffset,
  side,
  sideOffset,
  collisionPadding,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "collisionPadding"
  >): React.JSX.Element
declare function DropdownMenuGroup({
  ...props
}: MenuPrimitive.Group.Props): React.JSX.Element
declare function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}): React.JSX.Element
declare function DropdownMenuItem({
  className,
  inset,
  variant,
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}): React.JSX.Element
declare function DropdownMenuSub({
  ...props
}: MenuPrimitive.SubmenuRoot.Props): React.JSX.Element
declare function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}): React.JSX.Element
declare function DropdownMenuSubContent({
  align,
  alignOffset,
  side,
  sideOffset,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>): React.JSX.Element
declare function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}): React.JSX.Element
declare function DropdownMenuRadioGroup({
  ...props
}: MenuPrimitive.RadioGroup.Props): React.JSX.Element
declare function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}): React.JSX.Element
declare function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props): React.JSX.Element
declare function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">): React.JSX.Element
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
