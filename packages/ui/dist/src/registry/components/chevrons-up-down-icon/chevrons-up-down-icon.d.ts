export type ChevronsUpDownIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}
export type ChevronsUpDownIconProps = React.ComponentPropsWithoutRef<"svg"> & {
  ref?: React.Ref<ChevronsUpDownIconHandle>
  duration?: number
}
export declare function ChevronsUpDownIcon({
  ref,
  duration,
  ...props
}: ChevronsUpDownIconProps): import("react").JSX.Element
