const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 701.35 318.8"><path fill="currentColor" d="M 255.05 255.04 L 255.05 318.8 L 63.77 318.8 L 63.77 255.04 Z M 0 255.04 L 0 63.77 L 63.77 63.77 L 63.77 255.04 Z M 63.77 63.77 L 63.77 0 L 255.05 0 L 255.05 63.77 Z M 255.05 255.04 L 255.05 63.77 L 318.8 63.77 L 318.8 255.04 Z"/><path fill="currentColor" d="M 382.55 318.8 L 382.55 0 L 637.6 0 L 637.6 63.77 L 446.32 63.77 L 446.32 127.52 L 637.6 127.52 L 637.6 191.29 L 446.32 191.29 L 446.32 318.8 Z M 637.6 127.52 L 637.6 63.77 L 701.35 63.77 L 701.35 127.52 Z"/></svg>`

export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 701.35 318.8"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M 255.05 255.04 L 255.05 318.8 L 63.77 318.8 L 63.77 255.04 Z M 0 255.04 L 0 63.77 L 63.77 63.77 L 63.77 255.04 Z M 63.77 63.77 L 63.77 0 L 255.05 0 L 255.05 63.77 Z M 255.05 255.04 L 255.05 63.77 L 318.8 63.77 L 318.8 255.04 Z"
      />
      <path
        fill="currentColor"
        d="M 382.55 318.8 L 382.55 0 L 637.6 0 L 637.6 63.77 L 446.32 63.77 L 446.32 127.52 L 637.6 127.52 L 637.6 191.29 L 446.32 191.29 L 446.32 318.8 Z M 637.6 127.52 L 637.6 63.77 L 701.35 63.77 L 701.35 127.52 Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return MARK_SVG
}
