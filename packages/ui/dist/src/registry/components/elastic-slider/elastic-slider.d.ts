export type ElasticSliderProps = {
  /** Label shown inside the track. */
  label: string
  /** Controlled value. Use together with `onValueChange` */
  value?: number
  /** Initial value for uncontrolled mode. Falls back to `min` */
  defaultValue?: number
  /** Called with the new value on drag, click, or key press. */
  onValueChange?: (value: number) => void
  /**
   * Minimum value.
   * @defaultValue 0 */
  min?: number
  /**
   * Maximum value.
   * @defaultValue 1 */
  max?: number
  /**
   * Smallest increment.
   * @defaultValue 0.01 */
  step?: number
  /** Format the displayed value. Defaults to `value.toFixed(...)` based on `step` */
  formatValue?: (value: number) => string
  className?: string
  /** Accessible name. Falls back to `label` */
  "aria-label"?: string
}
export declare function ElasticSlider({
  label,
  value: valueProp,
  defaultValue,
  onValueChange,
  min,
  max,
  step,
  formatValue,
  className,
  "aria-label": ariaLabel,
}: ElasticSliderProps): import("react").JSX.Element
