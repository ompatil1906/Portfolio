import { OpenPanel } from "@openpanel/web"

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

/**
 * With no client id the SDK would still initialize and fire requests, so it is
 * disabled until `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is set.
 */
export const op = new OpenPanel({
  clientId: clientId ?? "",
  trackScreenViews: Boolean(clientId),
  trackOutgoingLinks: Boolean(clientId),
  trackAttributes: Boolean(clientId),
  disabled: !clientId,
})

if (typeof window !== "undefined") {
  window.openpanel = op
  window.op = new Proxy(
    ((method: string, ...args: unknown[]) => {
      const fn = (
        op as unknown as Record<string, (...a: unknown[]) => unknown>
      )[method]
      if (typeof fn === "function") {
        return fn.apply(op, args)
      }
    }) as unknown as typeof window.op,
    {
      get(_target, prop: string) {
        const val = (op as unknown as Record<string, unknown>)[prop]
        if (typeof val === "function") {
          return val.bind(op)
        }
        return val
      },
    }
  )
}
