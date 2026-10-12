export type CopyState = "idle" | "done" | "error"
export type UseCopyToClipboardOptions = {
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
  resetDelay?: number
}
export declare function useCopyToClipboard({
  onCopySuccess,
  onCopyError,
  resetDelay,
}?: UseCopyToClipboardOptions): {
  readonly state: CopyState
  readonly copy: (text: string | (() => string)) => Promise<void>
}
