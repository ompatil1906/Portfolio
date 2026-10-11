import { useSyncExternalStore } from "react"

export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
}

// Om Patil portfolio
