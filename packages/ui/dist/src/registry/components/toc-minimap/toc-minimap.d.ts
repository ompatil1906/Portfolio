export type TOCItemType = {
  title: React.ReactNode
  url: string
  depth: number
}
export type TOCMinimapProps = {
  /** @fumadocsHref #tocitemtype */
  items: TOCItemType[]
  className?: string
}
export declare function TOCMinimap({
  items,
  className,
}: TOCMinimapProps): import("react").JSX.Element | null
export declare function useActiveHeading(itemIds: string[]): string | null
