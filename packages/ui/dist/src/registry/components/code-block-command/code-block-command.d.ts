export type PackageManager = "prompt" | "pnpm" | "yarn" | "npm" | "bun"
export declare function usePackageManager(): [
  PackageManager,
  (
    args_0:
      | PackageManager
      | typeof import("jotai/utils").RESET
      | ((
          prev: PackageManager
        ) => PackageManager | typeof import("jotai/utils").RESET)
  ) => void,
]
/**
 * Props for the CodeBlockCommand component.
 */
export type CodeBlockCommandProps = {
  /**
   * Natural language instruction for AI agents to install a package or component.
   */
  prompt?: string
  /**
   * Command to execute with pnpm package manager.
   */
  pnpm?: string
  /**
   * Command to execute with yarn package manager.
   */
  yarn?: string
  /**
   * Command to execute with npm package manager.
   */
  npm?: string
  /**
   * Command to execute with bun package manager.
   */
  bun?: string
  /**
   * Callback invoked when a command is successfully copied to clipboard.
   *
   * Receives an object containing the selected package manager and the copied command text.
   * Useful for tracking user interactions or showing custom success notifications.
   *
   * @param data - Object containing copy operation details
   * @param data.packageManager - The package manager that was selected when copying
   * @param data.command - The actual command text that was copied
   *
   * @example
   * ```tsx
   * <CodeBlockCommand
   *   pnpm="pnpm add react"
   *   onCopySuccess={({ packageManager, command }) => {
   *     console.log(`Copied ${command} for ${packageManager}`)
   *   }}
   * />
   * ```
   */
  onCopySuccess?: (data: {
    packageManager: PackageManager
    command: string
  }) => void
  /**
   * Callback invoked when copying to clipboard fails.
   *
   * Receives the error object for debugging or showing custom error messages.
   *
   * @param error - The error that occurred during the copy operation
   *
   * @example
   * ```tsx
   * <CodeBlockCommand
   *   pnpm="pnpm add react"
   *   onCopyError={(error) => {
   *     console.error('Copy failed:', error)
   *   }}
   * />
   * ```
   */
  onCopyError?: (error: Error) => void
}
export declare function CodeBlockCommand({
  prompt,
  pnpm,
  yarn,
  npm,
  bun,
  onCopySuccess,
  onCopyError,
}: CodeBlockCommandProps): import("react").JSX.Element
/**
 * Result of converting an npm command to all package managers.
 */
export type ConvertNpmCommandResult = {
  /**
   * Command for pnpm package manager.
   */
  pnpm: string
  /**
   * Command for yarn package manager.
   */
  yarn: string
  /**
   * Command for npm package manager.
   */
  npm: string
  /**
   * Command for bun package manager.
   */
  bun: string
}
/**
 * Converts a standard npm command into equivalent commands for pnpm, yarn, npm,
 * and bun. The result can be spread directly into `CodeBlockCommand` props.
 *
 * Supported command patterns:
 * - `npm install <pkg>` -> add commands for each manager
 * - `npx create-<name>` -> create commands for each manager
 * - `npm create <name>` -> create commands for each manager
 * - `npx <command>` -> execute commands for each manager
 * - `npm run <script>` -> run commands for each manager
 *
 * Unrecognized commands are returned as-is for all package managers.
 *
 * @param npmCommand - A standard npm/npx command string.
 * @returns An object with `pnpm`, `yarn`, `npm`, and `bun` command strings.
 *
 * @example
 * ```tsx
 * import { CodeBlockCommand, convertNpmCommand } from "@/registry/components/code-block-command"
 *
 * <CodeBlockCommand {...convertNpmCommand("npx shadcn add button")} />
 * ```
 */
export declare function convertNpmCommand(
  npmCommand: string
): ConvertNpmCommandResult
