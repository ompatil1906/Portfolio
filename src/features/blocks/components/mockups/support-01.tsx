import { Bar, Button, Heading } from "./primitives"

export function Support01Mockup() {
  return (
    <div className="flex size-full flex-col justify-center px-3">
      <div className="flex flex-col items-center gap-2 border border-line p-4">
        <Heading className="h-2.5 w-24" />
        <Bar className="h-0.75 w-32" />
        <Bar className="h-0.75 w-24" />

        <div className="mt-2 flex items-center gap-1.5">
          <Button className="w-12" />
          <Button variant="outline" className="w-12" />
        </div>
      </div>
    </div>
  )
}
