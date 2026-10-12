/**
 * This component is inspired by Devouring Details and Skiper UI.
 */
export type LineNavItem = {
  title: string
  href: string
}
export type LineNavProps = {
  className?: string
  /** @fumadocsHref #linenavitem */
  items: LineNavItem[]
  /** Href of the active item. */
  activeHref?: string
  /** Scroll the active item into view on mount. */
  scrollActiveIntoView?: boolean
  /** Called when an item is clicked. */
  onItemClick?: (
    item: LineNavItem,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void
}
export declare function LineNav({
  className,
  items,
  activeHref,
  scrollActiveIntoView,
  onItemClick,
}: LineNavProps): import("react").JSX.Element
