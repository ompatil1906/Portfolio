export type Publication = {
  /** Stable unique identifier (used as list key). */
  id: string
  title: string
  /** Author names, in published order. */
  authors: string[]
  /** Venue/journal name. */
  venue: string
  /** Volume, issue, and page range, preformatted for display. */
  volume: string
  /** Publication date in ISO "YYYY-MM-DD" format. */
  date: string
  /** Digital Object Identifier, without the URL prefix. */
  doi: string
  /** Canonical landing page for the paper. */
  link: string
  /** Direct PDF URL. */
  pdf: string
  /** Short abstract summary. */
  abstract: string
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "ijcrt-side-channel-defenses",
    title:
      "Hardware-Level Defenses Against Side-Channel Attacks: Mitigating Power and Timing Vulnerabilities in Cryptographic Chips",
    authors: [
      "Amrapali Chavan",
      "Om Patil",
      "Krushna Renuke",
      "Yash Raut",
      "Sudarshan Narhare",
    ],
    venue: "International Journal of Creative Research Thoughts (IJCRT)",
    volume: "Vol. 14, Issue 5, pp. a560–a565",
    date: "2026-05-01",
    doi: "10.56975/ijcrt.v14i5.307653",
    link: "https://www.ijcrt.org/viewpaperforall.php?paper=IJCRT2605075",
    pdf: "https://ijcrt.org/papers/IJCRT2605075.pdf",
    abstract:
      "A review of hardware-level techniques for defending cryptographic chips against power and timing side-channel attacks — WDDL, hardware masking, constant-time design, and clock randomization — compared on effectiveness, area/performance overhead, scalability, and residual leakage.",
  },
]
