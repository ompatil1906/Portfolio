export type GlowCardGridProps = React.ComponentPropsWithoutRef<"div"> & {
  cardRadius?: number
  iconBlur?: number
  iconSaturate?: number
  iconBrightness?: number
  iconScale?: number
  iconOpacity?: number
  borderWidth?: number
  borderBlur?: number
  borderSaturate?: number
  borderBrightness?: number
  borderContrast?: number
  children: React.ReactNode
}
export declare function GlowCardGrid({
  cardRadius,
  iconBlur,
  iconSaturate,
  iconBrightness,
  iconScale,
  iconOpacity,
  borderWidth,
  borderBlur,
  borderSaturate,
  borderBrightness,
  borderContrast,
  className,
  style,
  ...props
}: GlowCardGridProps): import("react").JSX.Element
export type GlowCardProps = {
  name: string
  handle: string
  avatar: string
  className?: string
}
export declare function GlowCard({
  name,
  handle,
  avatar,
  className,
}: GlowCardProps): import("react").JSX.Element
