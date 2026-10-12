/**
 * Trigger haptic feedback on mobile devices.
 * Uses Vibration API on Android/modern browsers, and iOS checkbox trick on iOS.
 *
 * @param pattern - Vibration duration (ms) or pattern.
 * Custom patterns only work on Android devices. iOS uses fixed feedback.
 * See [Vibration API](https://developer.mozilla.org/docs/Web/API/Vibration_API)
 *
 * @example
 * import { haptic } from "@/lib/haptic"
 *
 * <Button onClick={() => haptic()}>Haptic</Button>
 */
export declare function haptic(pattern?: number | number[]): void
