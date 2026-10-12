export type GitHubStarsProps = {
  /** GitHub repository in `owner/repo` format. */
  repo: string
  /** Number of stars to display. */
  stargazersCount: number
  /**
   * Optional locales for number formatting.
   * See [MDN - Intl - locales argument](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
   * @defaultValue "en-US"
   */
  locales?: Intl.LocalesArgument
}
export declare function GitHubStars({
  repo,
  stargazersCount,
  locales,
}: GitHubStarsProps): import("react").JSX.Element
