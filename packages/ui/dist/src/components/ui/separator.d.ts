import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

declare function Separator({
  className,
  orientation,
  ...props
}: SeparatorPrimitive.Props): import("react").JSX.Element
export { Separator }
