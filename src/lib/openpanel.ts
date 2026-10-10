import { OpenPanel } from "@openpanel/web"

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

/**
 * With no client id the SDK would still initialize and fire requests, so it is
 * disabled until `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is set.
 */
export const op = new OpenPanel({
  clientId: clientId ?? "",
  trackScreenViews: Boolean(clientId),
  disabled: !clientId,
})
