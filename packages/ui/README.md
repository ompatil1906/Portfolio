# @heyompatil/ui

[![npm version](https://img.shields.io/npm/v/@heyompatil/ui.svg?style=flat-square)](https://www.npmjs.com/package/@heyompatil/ui)
[![license](https://img.shields.io/npm/l/@heyompatil/ui.svg?style=flat-square)](https://github.com/ompatil1906/Portfolio/blob/main/LICENSE)

A collection of crafted, animated React and Next.js UI components, micro-interactions, and visual effects by [Om Patil](https://heyompatil.me).

→ **Interactive Demos & Component Docs**: [heyompatil.me/components](https://heyompatil.me/components)

---

## Installation

```bash
npm install @heyompatil/ui
# or
pnpm add @heyompatil/ui
# or
bun add @heyompatil/ui
```

### Peer dependencies

Ensure you have React 18 or 19 installed:

```bash
npm install react react-dom
```

---

## Quick start

Import components directly into your React or Next.js application:

```tsx
import { TextFlip, ThemeSwitcher, WheelPicker } from "@heyompatil/ui"

export default function MyPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      {/* Theme Switcher with smooth indicator */}
      <ThemeSwitcher />

      {/* Smooth 3D Text Flip Effect */}
      <TextFlip>
        <span>Design Systems</span>
        <span>AI Workflows</span>
        <span>Fluid Interactions</span>
      </TextFlip>
    </div>
  )
}
```

---

## Component catalog

| Component                    | Description                                                         | Category     |
| :--------------------------- | :------------------------------------------------------------------ | :----------- |
| `ThemeSwitcher`              | System, light, and dark theme toggler with smooth sliding indicator | Controls     |
| `TextFlip`                   | Animated text cycling through phrases with a 3D flip transition     | Text Effects |
| `AppleHelloEffectEnglish`    | Signature Apple cursive handwriting SVG animation (English)         | Text Effects |
| `AppleHelloEffectHindi`      | Signature Apple cursive handwriting animation (Hindi)               | Text Effects |
| `AppleHelloEffectSpanish`    | Signature Apple cursive handwriting animation (Spanish)             | Text Effects |
| `AppleHelloEffectVietnamese` | Signature Apple cursive handwriting animation (Vietnamese)          | Text Effects |
| `WheelPicker`                | iOS-style inertia wheel picker with infinite loop support           | Controls     |
| `ElasticSlider`              | Magnetic rubber-band slider with spring physics feedback            | Controls     |
| `SlideToUnlock`              | Interactive iPhone-inspired slider with shimmering text             | Controls     |
| `SwipeActions`               | Swipeable row revealing left/right custom actions                   | Controls     |
| `CopyButton`                 | Clipboard button with audio, visual, and haptic feedback            | Utilities    |
| `ShimmeringText`             | Light-sweeping shimmering gradient text effect                      | Text Effects |
| `FluidGradientText`          | Mouse-tracking fluid gradient text effect                           | Text Effects |
| `SpinningCircularText`       | Circular continuous spinning typography                             | Text Effects |
| `GlowCardGrid`               | Spotlight border and background glowing cards                       | Effects      |
| `DotGridSpotlight`           | Interactive dot grid with cursor-tracking glow spotlight            | Effects      |
| `IconSwap`                   | Smooth morphing transitions between icon states                     | Effects      |
| `MobiusLoopIcon`             | Animated continuous Mobius loop infinity icon                       | Effects      |
| `ChevronsUpDownIcon`         | Direction-morphing chevrons icon                                    | Effects      |
| `Timescale`                  | Responsive timeline and milestone scale                             | Data Display |
| `ContributionGraph`          | GitHub-style activity contribution calendar                         | Data Display |
| `GithubContributions`        | Year-long GitHub contribution activity with tooltips                | Data Display |
| `GithubStars`                | Live repository star count button with formatted numbers            | Data Display |
| `LogosCarousel`              | Staggered wave column-by-column logos carousel                      | Marketing    |
| `LogosFlip`                  | Staggered 3D card-flip logos showcase                               | Marketing    |
| `Testimonial`                | Customer review card with author info and verified badge            | Marketing    |
| `Testimonial2`               | Minimal quote testimonial with attribution                          | Marketing    |
| `TestimonialSpotlight`       | Interactive testimonial card with cursor spotlight                  | Marketing    |
| `TestimonialsMarquee`        | Continuous looping horizontal marquee of testimonials               | Marketing    |
| `WorkExperience`             | Role experience timeline with expandable details                    | Marketing    |
| `LineNav`                    | Minimalist line-based page navigation                               | Navigation   |
| `TocMinimap`                 | Compact hoverable table-of-contents minimap                         | Navigation   |
| `BrandAssetsMenu`            | Context menu for SVG copying and brand asset download               | Menus        |
| `ShareMenu`                  | Web Share API integration with social fallback menu                 | Menus        |
| `StatusButton`               | State-driven action button with spinner and status feedback         | Controls     |
| `ConsentManager`             | Cookie consent banner and tracking preference dialog                | Utilities    |
| `MiddleTruncation`           | Smart text truncator preserving beginning and end                   | Typography   |
| `Twemoji`                    | Inline SVG Twemoji emoji parser                                     | Typography   |
| `ScrollFadeEffect`           | Automatic edge fade mask for scrollable containers                  | Effects      |
| `SpotlightLogo`              | Radial spotlight highlight effect for brand logos                   | Marketing    |

---

## Styling & Tailwind CSS

These components use Tailwind CSS classes and CSS variables. If you are using Tailwind CSS v4:

```css
@import "tailwindcss";
```

Ensure standard color variables (`--background`, `--foreground`, `--muted`, `--accent`) or shadcn CSS variables are present in your stylesheet.

---

## License

MIT License © [Om Patil](https://heyompatil.me)
