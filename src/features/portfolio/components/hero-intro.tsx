import { ArrowRightIcon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { USER } from "@/features/portfolio/data/user"

import { Panel, PanelContent } from "./panel"

export function HeroIntro() {
  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Introduction</h2>

      <PanelContent className="space-y-4">
        <p className="font-heading text-2xl font-medium tracking-tight text-balance sm:text-3xl">
          {USER.headline}
        </p>

        <p className="text-base text-balance text-muted-foreground">
          AI & Data Science engineer focused on Generative AI, Agentic Systems,
          and full-stack AI products — building multi-agent research workflows,
          RAG systems, and LLM products that ship.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button
            className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
            size="sm"
            nativeButton={false}
            render={<a href="#projects" />}
          >
            Explore My Work
            <ArrowRightIcon />
          </Button>

          <Button
            className="gap-2 shadow-none"
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Get in Touch
            <MailIcon />
          </Button>
        </div>
      </PanelContent>
    </Panel>
  )
}
