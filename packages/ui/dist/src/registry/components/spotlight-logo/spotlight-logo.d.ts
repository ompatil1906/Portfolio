/**
 * An SVG mark whose outline is traced by a gradient highlight that follows the
 * cursor, paired with a springy press effect and a tactile click sound.
 *
 * Swap the SVG paths below for your own artwork. The interaction is driven by:
 * - a `radialGradient` whose center springs toward the pointer (the spotlight),
 *   reused as a second stroke layered over the base outline.
 * - `whileTap="pressed"` morphing the path `d` values between two states.
 *
 * This mark spells "OP" over an isometric lattice: the "O" is an extruded
 * diamond ring, the "P" a stem and bowl sharing the same ground plane. The
 * interaction is adapted from the SpotlightLogo by ncdai, whose demo mark was
 * drawn on Figma with the
 * [Fast Isometric Plugin](https://www.figma.com/community/plugin/1249759048471403961).
 * Inspired by tailwindcss.com.
 */
export declare function SpotlightLogo(): import("react").JSX.Element
