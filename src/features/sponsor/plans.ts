/**
 * Sponsorship plans shown under "Sponsorship tiers" on the /sponsors page.
 *
 * Edit these to match what you actually offer on GitHub Sponsors
 * (github.com/sponsors/ompatil1906). The "Sponsor" button on the page links
 * there, so the prices and perks here should stay in sync with GitHub.
 *
 * This is a different concept from SPONSOR_TIERS in ./types, which groups
 * *existing* sponsors for the listing further down the page.
 */
export type SponsorPlan = {
  name: string
  /** Price in USD per month. */
  price: number
  description: string
}

export const SPONSOR_PLANS: SponsorPlan[] = [
  {
    name: "Backer",
    price: 1,
    description: "A small thank-you that keeps the work going.",
  },
  {
    name: "Supporter",
    price: 5,
    description: "Helps cover the tools and hosting behind the projects.",
  },
  {
    name: "Bronze",
    price: 25,
    description: "Your name listed on this page and on my GitHub profile.",
  },
  {
    name: "Silver",
    price: 50,
    description:
      "Your name and a dofollow backlink on the projects you support.",
  },
  {
    name: "Gold",
    price: 100,
    description: "Logo placement and priority on your reported issues.",
  },
  {
    name: "Platinum",
    price: 250,
    description:
      "Top placement, a shoutout on X, and priority on feature requests.",
  },
]

/**
 * Perks listed under "What you'll get as a sponsor". Keep these truthful to
 * what you can actually deliver.
 */
export const SPONSOR_BENEFITS: string[] = [
  "Your name or logo displayed on this page and on my GitHub profile",
  "A dofollow backlink to your website",
  "A public shoutout on X when you sponsor",
  "Priority on your feature requests and reported issues",
]
