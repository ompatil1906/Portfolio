export type SpinningCircularTextProps = Omit<
  React.ComponentProps<"div">,
  "children"
> & {
  text: string
  /**
   * @defaultValue 1
   * */
  charSpacing?: number
  /**
   * @defaultValue 1rem
   * */
  fontSize?: string
  /**
   * Class names applied to the spinning ring, e.g. to override the
   * animation duration (`duration-[10s]`) or easing.
   * */
  spinClassName?: string
  /**
   * Customize how each character is rendered, e.g. to wrap it in a
   * `motion.span` for per-character effects. The returned node is placed
   * inside a positioned wrapper, so positioning is handled for you.
   * */
  renderChar?: (char: string, index: number) => React.ReactNode
}
export declare function SpinningCircularText({
  text,
  charSpacing,
  fontSize,
  spinClassName,
  renderChar,
  className,
  style,
  ...props
}: SpinningCircularTextProps): import("react").JSX.Element
