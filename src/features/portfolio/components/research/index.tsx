import { format } from "date-fns"
import { ArrowUpRightIcon, FileTextIcon } from "lucide-react"

import { IconTile } from "@/components/ui/icon-tile"
import { Markdown } from "@/components/markdown"

import { PUBLICATIONS } from "../../data/research"
import type { Publication } from "../../data/research"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { PanelTitleCopy } from "../panel-title-copy"

const ID = "research"

export function Research() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Research</a>
          <PanelTitleSup>({PUBLICATIONS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <ul>
        {PUBLICATIONS.map((publication) => (
          <li key={publication.id} className="screen-line-bottom">
            <PublicationItem publication={publication} />
          </li>
        ))}
      </ul>
    </Panel>
  )
}

function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <div className="relative flex items-start hover:bg-accent-muted">
      <IconTile className="mx-4 mt-4 shrink-0">
        <FileTextIcon />
      </IconTile>

      <div className="flex-1 space-y-2 border-l border-dashed border-line p-4">
        <h3 className="leading-snug font-medium text-balance">
          <a href={publication.link} target="_blank" rel="noopener">
            {publication.title}
          </a>
        </h3>

        <p className="text-sm text-muted-foreground">
          {publication.authors.map((author, index) => (
            <span key={author}>
              {index > 0 && ", "}
              <span
                className={
                  author === "Om Patil" ? "font-medium text-foreground" : ""
                }
              >
                {author}
              </span>
            </span>
          ))}
        </p>

        <dl className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <div>
            <dt className="sr-only">Venue</dt>
            <dd>{publication.venue}</dd>
          </div>

          <span aria-hidden>·</span>

          <div>
            <dt className="sr-only">Volume</dt>
            <dd>{publication.volume}</dd>
          </div>

          <span aria-hidden>·</span>

          <div>
            <dt className="sr-only">Published</dt>
            <dd>
              <time dateTime={publication.date}>
                {format(new Date(publication.date), "MM.yyyy")}
              </time>
            </dd>
          </div>
        </dl>

        <div className="typeset typeset-description text-sm">
          <Markdown>{publication.abstract}</Markdown>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener"
          >
            DOI <ArrowUpRightIcon className="size-3.5" />
          </a>
          <a
            className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
            href={publication.pdf}
            target="_blank"
            rel="noopener"
          >
            PDF <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
