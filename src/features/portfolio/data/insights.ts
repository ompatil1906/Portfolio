import "server-only"

import { getCachedOpenPanelOverview } from "@/registry/lib/openpanel/get-openpanel-overview"

export type {
  InsightsChanges,
  InsightsResponse,
  InsightsSeriesItem,
  InsightsSummary,
} from "@/registry/lib/openpanel/get-openpanel-overview"

export const getInsights = getCachedOpenPanelOverview
