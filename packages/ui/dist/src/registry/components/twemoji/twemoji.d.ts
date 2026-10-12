export declare const TWEMOJI_CDN_URL = "https://abs-0.twimg.com/emoji/v2/svg"
export type TwemojiProps = {
  children: string
  className?: string
  /**
   * Resolve an emoji code point to an image URL.
   *
   * @param codePoint - The Unicode code point of the emoji (e.g. `1f44d`)
   * @returns The URL string pointing to the emoji image asset
   *
   * @example
   * ```tsx
   * source={(codePoint) => `https://cdn.example.com/emoji/${codePoint}.svg`}
   * ```
   * */
  source?: (codePoint: string) => string
}
export declare function Twemoji({
  children,
  className,
  source,
}: TwemojiProps): import("react").JSX.Element
