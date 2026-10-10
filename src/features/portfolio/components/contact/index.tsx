import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { SOCIAL_LINKS } from "../../data/social-links"
import { USER } from "../../data/user"
import { EmailItem } from "../overview/email-item"
import { PhoneItem } from "../overview/phone-item"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { PanelTitleCopy } from "../panel-title-copy"
import { SOCIAL_ICONS } from "../social-link-icons"

const ID = "contact"

export function Contact() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Contact</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <p className="text-base text-balance text-muted-foreground">
          Open to AI/GenAI engineering roles, collaborations, and interesting
          problems. The fastest way to reach me is email.
        </p>

        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
          <EmailItem emailB64={USER.emailB64} />
          <PhoneItem phoneNumberB64={USER.phoneNumberB64} />
        </div>

        <ul className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.name}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      className="text-foreground/80 shadow-none [&_svg:not([class*='size-'])]:size-4.5"
                      variant="outline"
                      size="icon-sm"
                      nativeButton={false}
                      render={
                        <a
                          href={addQueryParams(item.href, UTM_PARAMS)}
                          target="_blank"
                          rel="noopener"
                        >
                          {SOCIAL_ICONS[item.name]}
                          <span className="sr-only">{item.title}</span>
                        </a>
                      }
                    />
                  }
                />
                <TooltipContent>
                  {item.title} ({item.handle})
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
