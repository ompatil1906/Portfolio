const WORDMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="1024" y="128" text-anchor="middle" dominant-baseline="central" font-family="Geist, Arial, sans-serif" font-weight="600" font-size="184" letter-spacing="4" fill="currentColor">Om Patil</text></svg>`

export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <text
        x="1024"
        y="128"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Geist, Arial, sans-serif"
        fontWeight="600"
        fontSize="184"
        letterSpacing="4"
        fill="currentColor"
      >
        Om Patil
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return WORDMARK_SVG
}
