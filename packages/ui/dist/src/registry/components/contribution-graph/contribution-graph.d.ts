import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react"
import type { Day as WeekDay } from "date-fns"

export type Activity = {
  date: string
  count: number
  level: number
}
export type Labels = {
  months?: string[]
  weekdays?: string[]
  totalCount?: string
  legend?: {
    less?: string
    more?: string
  }
}
export type ContributionGraphProps = HTMLAttributes<HTMLDivElement> & {
  data: Activity[]
  blockMargin?: number
  blockRadius?: number
  blockSize?: number
  fontSize?: number
  labels?: Labels
  maxLevel?: number
  style?: CSSProperties
  totalCount?: number
  weekStart?: WeekDay
  children: ReactNode
  className?: string
}
export declare const ContributionGraph: ({
  data,
  blockMargin,
  blockRadius,
  blockSize,
  fontSize,
  labels: labelsProp,
  maxLevel: maxLevelProp,
  style,
  totalCount: totalCountProp,
  weekStart,
  className,
  ...props
}: ContributionGraphProps) => import("react").JSX.Element | null
export type ContributionGraphBlockProps = HTMLAttributes<SVGRectElement> & {
  activity: Activity
  dayIndex: number
  weekIndex: number
}
export declare const ContributionGraphBlock: ({
  activity,
  dayIndex,
  weekIndex,
  className,
  ...props
}: ContributionGraphBlockProps) => import("react").JSX.Element
export type ContributionGraphCalendarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  hideMonthLabels?: boolean
  className?: string
  children: (props: {
    activity: Activity
    dayIndex: number
    weekIndex: number
  }) => ReactNode
}
export declare const ContributionGraphCalendar: ({
  title,
  hideMonthLabels,
  className,
  children,
  ...props
}: ContributionGraphCalendarProps) => import("react").JSX.Element
export type ContributionGraphFooterProps = HTMLAttributes<HTMLDivElement>
export declare const ContributionGraphFooter: ({
  className,
  ...props
}: ContributionGraphFooterProps) => import("react").JSX.Element
export type ContributionGraphTotalCountProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children?: (props: { totalCount: number; year: number }) => ReactNode
}
export declare const ContributionGraphTotalCount: ({
  className,
  children,
  ...props
}: ContributionGraphTotalCountProps) => import("react").JSX.Element
export type ContributionGraphLegendProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children?: (props: { level: number }) => ReactNode
}
export declare const ContributionGraphLegend: ({
  className,
  children,
  ...props
}: ContributionGraphLegendProps) => import("react").JSX.Element
