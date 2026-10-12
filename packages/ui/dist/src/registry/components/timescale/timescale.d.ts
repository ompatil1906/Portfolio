export type TimescaleRootProps = React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical"
}
export declare function TimescaleRoot({
  className,
  orientation,
  ...props
}: TimescaleRootProps): import("react").JSX.Element
export type TimescaleViewportProps = React.ComponentProps<"div">
export declare function TimescaleViewport({
  className,
  ...props
}: TimescaleViewportProps): import("react").JSX.Element
export type TimescaleHeaderProps = React.ComponentProps<"div">
export declare function TimescaleHeader({
  className,
  ...props
}: TimescaleHeaderProps): import("react").JSX.Element
export type TimescaleTrackProps = React.ComponentProps<"div">
export declare function TimescaleTrack({
  className,
  ...props
}: TimescaleTrackProps): import("react").JSX.Element
export type TimescaleRailProps = React.ComponentProps<"div">
export declare function TimescaleRail({
  className,
  ...props
}: TimescaleRailProps): import("react").JSX.Element
export type TimescaleItemProps = React.ComponentProps<"div">
export declare function TimescaleItem({
  className,
  ...props
}: TimescaleItemProps): import("react").JSX.Element
export type TimescaleTickProps = React.ComponentProps<"span">
export declare function TimescaleTick({
  className,
  ...props
}: TimescaleTickProps): import("react").JSX.Element
export type TimescaleAgeProps = React.ComponentProps<"p">
export declare function TimescaleAge({
  className,
  ...props
}: TimescaleAgeProps): import("react").JSX.Element
export type TimescaleYearProps = React.ComponentProps<"p">
export declare function TimescaleYear({
  className,
  ...props
}: TimescaleYearProps): import("react").JSX.Element
export type TimescaleContentProps = React.ComponentProps<"div">
export declare function TimescaleContent({
  className,
  ...props
}: TimescaleContentProps): import("react").JSX.Element
export declare function TimescaleIntroScroll({
  children,
}: {
  children: React.ReactNode
}): import("react").JSX.Element
