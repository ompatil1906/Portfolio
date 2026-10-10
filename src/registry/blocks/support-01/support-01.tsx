import { HeartIcon, StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Support01() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="rounded-2xl border border-line bg-card p-8 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight">
            Support the work
          </h2>

          <p className="mx-auto mt-3 max-w-prose text-balance text-muted-foreground">
            Everything here is free and open source. If it saved you time, you
            can sponsor the work or star the repositories.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Button
              nativeButton={false}
              render={
                <a
                  href="https://github.com/sponsors/ompatil1906"
                  target="_blank"
                  rel="noopener sponsored"
                />
              }
            >
              <HeartIcon />
              Sponsor
            </Button>

            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://github.com/ompatil1906"
                  target="_blank"
                  rel="noopener"
                />
              }
            >
              <StarIcon />
              Star on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
