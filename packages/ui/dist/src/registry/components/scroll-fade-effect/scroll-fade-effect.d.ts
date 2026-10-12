import type { ComponentProps } from "react"

export type ScrollFadeEffectProps = ComponentProps<"div"> & {
  /**
   * Scroll direction to apply the fade effect.
   * @defaultValue "vertical"
   * */
  orientation?: "horizontal" | "vertical"
}
export declare function ScrollFadeEffect({
  className,
  orientation,
  ...props
}: ScrollFadeEffectProps): import("react").JSX.Element
