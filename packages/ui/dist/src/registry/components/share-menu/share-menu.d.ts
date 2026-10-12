export type ShareMenuProps = {
  /** Title passed to the native share sheet. */
  title: string
  /** URL to share. Relative URLs are resolved against the current origin. */
  url: string
}
export declare function ShareMenu({
  title,
  url,
}: ShareMenuProps): import("react").JSX.Element
