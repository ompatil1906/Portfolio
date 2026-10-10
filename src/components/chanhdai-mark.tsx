export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 48H224V208H64V48ZM96 80H192V176H96V80ZM272 48H416V144H304V240H272V48ZM304 80H384V112H304V80Z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M64 48H224V208H64V48ZM96 80H192V176H96V80ZM272 48H416V144H304V240H272V48ZM304 80H384V112H304V80Z"/></svg>`
}
