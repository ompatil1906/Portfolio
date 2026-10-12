declare global {
  interface Window {
    _carbonads?: {
      refresh: () => void
    }
  }
}
export type CarbonAdsProps = {
  /** The `serve` query parameter of your Carbon ad tag. */
  serve: string
  /** The `placement` query parameter of your Carbon ad tag. */
  placement: string
  /**
   * Ad layout. `responsive` adapts to the container width, `cover` is the
   * taller unit.
   * @defaultValue "responsive"
   */
  format?: "cover" | "responsive"
  className?: string
}
export declare function CarbonAds({
  serve,
  placement,
  format,
  className,
}: CarbonAdsProps): import("react").JSX.Element | null
