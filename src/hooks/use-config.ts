import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export type InstallationType = "cli" | "npm" | "pkg" | "manual"

type Config = {
  installationType: InstallationType
}

const configAtom = atomWithStorage<Config>("config_v1", {
  installationType: "cli",
})

export function useConfig() {
  return useAtom(configAtom)
}

// Om Patil portfolio
