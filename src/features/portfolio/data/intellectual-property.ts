import type { Certification } from "../types/certifications"

/**
 * Trademark and copyright registrations. They share the certification shape
 * but stay a separate list since they certify ownership of intellectual
 * property rather than earned skills.
 */
export const INTELLECTUAL_PROPERTY: Certification[] = []
