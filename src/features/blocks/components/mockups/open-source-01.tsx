import { Bar, Box, Heading } from "./primitives"

const ROWS = [1, 2, 3, 4]

export function OpenSource01Mockup() {
  return (
    <div className="flex size-full flex-col justify-center px-3">
      <div className="border-x border-line">
        <div className="flex items-center gap-1 border-y border-line p-2">
          <Heading className="h-2 w-16" />
        </div>

        {ROWS.map((row) => (
          <div
            key={row}
            className="flex items-center gap-2 border-b border-line p-2 last:border-b-0"
          >
            <Box className="size-3 shrink-0 rounded-full" />
            <div className="flex-1 space-y-1">
              <Bar className="h-0.75 w-3/4" />
              <Bar className="h-0.5 w-1/2 bg-muted-foreground/25" />
            </div>
            <Bar className="h-0.5 w-4 bg-muted-foreground/25" />
          </div>
        ))}
      </div>
    </div>
  )
}
