import type { ReactNode } from "react"

import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { getOpenSource } from "@/features/portfolio/data/open-source"

import { ContributionItem } from "./contribution-item"
import { RepoItem } from "./repo-item"

const ID = "open-source"

export async function OpenSource() {
  const data = await getOpenSource()

  if (data === null) {
    return null
  }

  const total =
    data.contributions.length + data.forks.length + data.owned.length

  if (total === 0) {
    return null
  }

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Open Source</a>
          <PanelTitleSup>({total})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {data.contributions.length > 0 && (
        <Group title="Contributions" count={data.contributions.length}>
          <CollapsibleList
            items={data.contributions}
            max={4}
            keyExtractor={(item) => String(item.id)}
            renderItem={(item) => <ContributionItem contribution={item} />}
          />
        </Group>
      )}

      {data.forks.length > 0 && (
        <Group title="Forked repositories" count={data.forks.length}>
          <CollapsibleList
            items={data.forks}
            max={4}
            keyExtractor={(repo) => String(repo.id)}
            renderItem={(repo) => <RepoItem repo={repo} />}
          />
        </Group>
      )}

      {data.owned.length > 0 && (
        <Group title="Projects" count={data.owned.length}>
          <CollapsibleList
            items={data.owned}
            max={4}
            keyExtractor={(repo) => String(repo.id)}
            renderItem={(repo) => <RepoItem repo={repo} />}
          />
        </Group>
      )}
    </Panel>
  )
}

function Group({
  title,
  count,
  children,
}: {
  title: string
  count: number
  children: ReactNode
}) {
  return (
    <div className="screen-line-top">
      <h3 className="screen-line-bottom flex items-baseline gap-2 px-4 py-2 text-sm font-medium text-muted-foreground">
        {title}
        <span className="tabular-nums">({count})</span>
      </h3>
      {children}
    </div>
  )
}

export function OpenSourceSkeleton() {
  return <Panel className="h-64" />
}
