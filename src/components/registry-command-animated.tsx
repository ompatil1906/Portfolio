"use client"

import { registryConfig } from "@/config/registry"
import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import type { PackageManager } from "@/hooks/use-package-manager"
import { usePackageManager } from "@/hooks/use-package-manager"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { IconSwap, IconSwapItem } from "@/registry/components/icon-swap"

import { CopyButton } from "./copy-button"
import { getIconForPackageManager, NpmIcon } from "./icons"

const pmCommands = {
  pnpm: "pnpm dlx",
  yarn: "yarn",
  npm: "npx",
  bun: "bunx --bun",
}

const pkgCommands: Record<PackageManager, string> = {
  pnpm: "pnpm add @heyompatil/ui",
  yarn: "yarn add @heyompatil/ui",
  npm: "npm install @heyompatil/ui",
  bun: "bun add @heyompatil/ui",
}

export function RegistryCommandAnimated() {
  const [packageManager, setPackageManager] = usePackageManager()
  const [config, setConfig] = useConfig()
  const installType = config.installationType === "pkg" ? "pkg" : "cli"

  return (
    <div className="relative overflow-hidden">
      <Tabs
        className="gap-0"
        value={packageManager}
        onValueChange={(value) => {
          setPackageManager(value as PackageManager)
        }}
      >
        <div className="flex items-center justify-between px-4 shadow-[inset_0_-1px_0_0] shadow-line">
          <TabsList className="h-10 rounded-none bg-transparent p-0 inset-ring-0 dark:bg-transparent [&_svg]:size-4 [&_svg]:text-muted-foreground">
            <IconSwap>
              <IconSwapItem className="mr-2" key={packageManager}>
                {getIconForPackageManager(packageManager)}
              </IconSwapItem>
            </IconSwap>

            {Object.entries(pmCommands).map(([key]) => {
              return (
                <TabsTrigger
                  key={key}
                  className="h-7 rounded-lg p-0 px-2 font-mono"
                  value={key}
                >
                  {key}
                </TabsTrigger>
              )
            })}

            <TabsIndicator className="h-0.5 translate-y-0 rounded-none bg-foreground ring-0 dark:bg-foreground" />
          </TabsList>

          <div className="flex items-center gap-1 pr-9">
            <button
              type="button"
              onClick={() =>
                setConfig((prev) => ({ ...prev, installationType: "cli" }))
              }
              className={cn(
                "cursor-pointer rounded px-2 py-0.5 font-mono text-xs font-medium transition-colors",
                installType === "cli"
                  ? "bg-muted font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              CLI
            </button>
            <button
              type="button"
              onClick={() =>
                setConfig((prev) => ({ ...prev, installationType: "pkg" }))
              }
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded px-2 py-0.5 font-mono text-xs font-medium transition-colors",
                installType === "pkg"
                  ? "bg-muted font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <NpmIcon className="size-3 fill-current" />
              <span>@heyompatil/ui</span>
            </button>
          </div>
        </div>

        {installType === "cli" ? (
          <pre className="-translate-y-px p-4">
            <code
              data-language="bash"
              className="block font-mono text-sm text-foreground max-sm:leading-6"
            >
              {Object.entries(pmCommands).map(([key, command]) => {
                return (
                  <TabsContent
                    key={key}
                    value={key}
                    render={<span className="block sm:inline-block" />}
                  >
                    {command} shadcn add{" "}
                    <span className="select-none sm:hidden" aria-hidden="true">
                      \
                    </span>
                  </TabsContent>
                )
              })}

              <span className="text-foreground">
                {registryConfig.namespace}/ui
              </span>
            </code>
          </pre>
        ) : (
          <pre className="-translate-y-px p-4">
            <code
              data-language="bash"
              className="block font-mono text-sm text-foreground max-sm:leading-6"
            >
              {Object.entries(pkgCommands).map(([key, command]) => {
                return (
                  <TabsContent
                    key={key}
                    value={key}
                    render={<span className="block sm:inline-block" />}
                  >
                    {command}
                  </TabsContent>
                )
              })}
            </code>
          </pre>
        )}

        <div className="-mt-2 flex items-center gap-2 px-4 pb-3 text-xs text-muted-foreground">
          <span>Includes all 42 components &amp; utilities</span>
          <span>•</span>
          <a
            href="https://www.npmjs.com/package/@heyompatil/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-foreground"
          >
            npmjs.com/package/@heyompatil/ui ↗
          </a>
        </div>
      </Tabs>

      <CopyButton
        className="absolute top-1.5 right-1.5 z-10 size-7 border-none text-muted-foreground"
        variant="ghost"
        size="icon-sm"
        text={() => {
          if (installType === "pkg") {
            return pkgCommands[packageManager] || pkgCommands["pnpm"]
          }
          const baseCommand = pmCommands[packageManager] || pmCommands["pnpm"]
          return `${baseCommand} shadcn add ${registryConfig.namespace}/ui`
        }}
        event="copy_npm_command"
      />
    </div>
  )
}

// Om Patil portfolio
