import { addQueryParams } from "@/utils/url"
import { HeartIcon, StarIcon } from "lucide-react"

import {
  SOURCE_CODE_GITHUB_URL,
  SPONSORSHIP_URL,
  UTM_PARAMS,
} from "@/config/site"
import { Button } from "@/components/ui/button"

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { PanelTitleCopy } from "../panel-title-copy"

const ID = "support"

export function Support() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Support</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <p className="text-base text-balance text-muted-foreground">
          All of my open-source work — components, blocks, and projects — is
          free to use. If it saved you time, you can support the work or star
          the repositories.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button
            nativeButton={false}
            render={
              <a
                href={addQueryParams(SPONSORSHIP_URL, UTM_PARAMS)}
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
                href={addQueryParams(SOURCE_CODE_GITHUB_URL, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              />
            }
          >
            <StarIcon />
            Star on GitHub
          </Button>
        </div>
      </PanelContent>
    </Panel>
  )
}
