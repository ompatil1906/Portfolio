export type TestimonialSpotlightProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "onMouseMove"
> & {
  children: React.ReactNode
}
export declare function TestimonialSpotlight({
  children,
  className,
  ...props
}: TestimonialSpotlightProps): import("react").JSX.Element
