export type Testimonial2Props = {
  /** Full display name of the person giving the testimonial. */
  authorName: string
  /** Short tagline, title, or description of the person. */
  authorTagline: string
  /** Link to the person's profile, website, or social media page. */
  url: string
  /** The testimonial text content or recommendation message. */
  quote: string
  /** Additional CSS classes to apply to the testimonial container. */
  className?: string
}
export declare function Testimonial2({
  className,
  authorName,
  authorTagline,
  url,
  quote,
}: Testimonial2Props): import("react").JSX.Element
