import React from "react"

export type DotGridSpotlightProps = {
  /**
   * The base color of the default/inactive dots.
   * @default "rgba(255, 255, 255, 0.05)"
   */
  dotColor?: string
  /**
   * The color of the active dots when illuminated by the cursor's spotlight.
   * @default "rgba(255, 255, 255, 0.1)"
   */
  activeDotColor?: string
  /**
   * The distance (in pixels) between each dot in the grid.
   * @default 10
   */
  spacing?: number
  /**
   * The default radius of the dots when they are outside the interaction area.
   * @default 1
   */
  baseRadius?: number
  /**
   * The maximum radius of a dot when it is at the exact center of the cursor.
   * @default 2
   */
  activeRadius?: number
  /**
   * The radius (in pixels) of the interaction area (spotlight) around the cursor.
   * @default 128
   */
  interactionRadius?: number
  /**
   * The maximum opacity (alpha) at the exact center of the spotlight.
   * Accepts a value between `0` and `1` (e.g., `1` for full opacity).
   * @default 1.0
   */
  activeMaxAlpha?: number
  /**
   * The minimum opacity (alpha) at the outer edge of the spotlight.
   * Accepts a value between `0` and `1` (e.g., a low value for a soft, subtle fade).
   * @default 0.5
   */
  activeMinAlpha?: number
  /**
   * Optional CSS class name to apply to the canvas or its wrapper.
   */
  className?: string
}
export declare function DotGridSpotlight({
  dotColor,
  activeDotColor,
  spacing,
  baseRadius,
  activeRadius,
  interactionRadius,
  activeMaxAlpha,
  activeMinAlpha,
  className,
}: DotGridSpotlightProps): React.JSX.Element
