import Markdown from "react-markdown"

import {
  TimescaleAge,
  TimescaleContent,
  TimescaleHeader,
  TimescaleIntroScroll,
  TimescaleItem,
  TimescaleRail,
  TimescaleRoot,
  TimescaleTick,
  TimescaleTrack,
  TimescaleViewport,
  TimescaleYear,
} from "@/registry/components/timescale"

export default function TimescaleDemo() {
  return (
    <TimescaleIntroScroll>
      <TimescaleRoot className="mt-4">
        <TimescaleHeader>
          <TimescaleAge>Age</TimescaleAge>
          <TimescaleYear>Years</TimescaleYear>
        </TimescaleHeader>

        <TimescaleViewport>
          <TimescaleTrack>
            <TimescaleRail />

            {MILESTONES.map((milestone) => (
              <TimescaleItem key={milestone.year}>
                <TimescaleTick />

                <TimescaleAge>{milestone.year - BIRTH_YEAR}</TimescaleAge>
                <TimescaleYear>{milestone.year}</TimescaleYear>

                {milestone.content && (
                  <TimescaleContent className="typeset typeset-timescale">
                    <Markdown>{milestone.content}</Markdown>
                  </TimescaleContent>
                )}
              </TimescaleItem>
            ))}
          </TimescaleTrack>
        </TimescaleViewport>
      </TimescaleRoot>
    </TimescaleIntroScroll>
  )
}

const BIRTH_YEAR = 2004

type Milestone = {
  year: number
  content?: string
}

const MILESTONES: Milestone[] = [
  {
    year: 2004,
    content: "Born in Pune, Maharashtra, India.",
  },
  { year: 2005 },
  { year: 2006 },
  { year: 2007 },
  { year: 2008 },
  { year: 2009 },
  { year: 2010 },
  { year: 2011 },
  { year: 2012 },
  { year: 2013 },
  { year: 2014 },
  { year: 2015 },
  { year: 2016 },
  { year: 2017 },
  { year: 2018 },
  { year: 2019 },
  { year: 2020 },
  { year: 2021 },
  {
    year: 2022,
    content: "Started learning to code and building small projects.",
  },
  {
    year: 2023,
    content:
      "Started my Bachelor’s in Artificial Intelligence & Data Science at AISSMS Institute of Information Technology, Pune.",
  },
  {
    year: 2024,
    content: "Started building and shipping AI/ML and full-stack projects.",
  },
  {
    year: 2025,
    content: `Won the National Level AI Summit 2025 and placed runner-up at a national-level hackathon.

Completed a Generative AI internship at Xerxez Solutions and a Data Science internship at Nexyom.

Founded [ViksitHub](https://viksithub.in) as a founder, leading product and full-stack engineering.`,
  },
  {
    year: 2026,
    content: `Joined AskLumenAI as Head of AI Technology for its AI research-intelligence platform.

Published a review paper on hardware-level defenses against side-channel attacks in IJCRT.`,
  },
]
