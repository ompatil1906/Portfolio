export type FluidGradientTextProps = {
  /** Text content rendered inside the SVG. */
  text: string
  /**
   * SVG viewBox width used to scale the gradient and text layout.
   * @default 1200
   * */
  svgViewBoxWidth?: number
  /**
   * SVG viewBox height used as the base text size.
   * @default 300
   * */
  svgViewBoxHeight?: number
}
export declare function FluidGradientText({
  text,
  svgViewBoxWidth,
  svgViewBoxHeight,
}: FluidGradientTextProps): import("react").JSX.Element
