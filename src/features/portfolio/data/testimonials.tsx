import type { Testimonial } from "../types/testimonials"

export const TESTIMONIALS: Testimonial[] = [
  {
    authorAvatar: "/images/avatars/shridhar9700.jpg",
    authorName: "Shridhar Patil",
    authorTagline: "@shridhar9700",
    url: "https://x.com/shridhar9700/status/2109267596365455549",
    quote: "@Om_Patil19 Impressive !!!",
    date: "2026-10-11",
  },
  {
    authorAvatar: "/images/avatars/swarooppatilx.jpg",
    authorName: "Swaroop",
    authorTagline: "@swarooppatilx",
    url: "https://x.com/swarooppatilx/status/2109268585105490253",
    quote: "@Om_Patil19 great work!",
    date: "2026-10-11",
  },
]

// Long quotes (more than 50 characters), ordered by date descending
export const TESTIMONIALS_1: Testimonial[] = []

// Short quotes (50 characters or fewer), ordered by date descending
export const TESTIMONIALS_2: Testimonial[] = TESTIMONIALS

// Om Patil portfolio
