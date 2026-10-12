import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"

declare function Tabs({
  className,
  ...props
}: TabsPrimitive.Root.Props): import("react").JSX.Element
declare function TabsList({
  className,
  ...props
}: TabsPrimitive.List.Props): import("react").JSX.Element
declare function TabsIndicator({
  className,
  ...props
}: TabsPrimitive.Indicator.Props): import("react").JSX.Element
declare function TabsTrigger({
  className,
  ...props
}: TabsPrimitive.Tab.Props): import("react").JSX.Element
declare function TabsContent({
  className,
  ...props
}: TabsPrimitive.Panel.Props): import("react").JSX.Element
export { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger }
