import { type ReactNode } from "react"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import {
  type AutoContents,
  type ContentsTagClassificationRecord,
  contentsTagRecord,
  historyOrigin,
  linkItemRecord,
  sourcesOrigin,
  treeLogos,
} from "./source"
import { type OmitByValue, type PickByValue, entries, keys } from "./util"

export type Logo = {
  icon: ReactNode
  color: string
  backgroundColor?: string
}

export type ContentsTagClassificationRecordConditions = Record<
  string,
  { text: string }
>

type ContentsTagClassifications = keyof ContentsTagClassificationRecord

export type ContentsTagRecordConditions = Record<
  string,
  {
    logo?: Logo
    type: ContentsTagClassifications
    description: string
    score?: 0 | 1 | 2 | 3 | 4 | 5
  }
>

export const contentsTags = keys(contentsTagRecord)
export const contentsTagEntries = entries(contentsTagRecord)

type ContentsTagManual = keyof OmitByValue<
  typeof contentsTagRecord,
  { type: AutoContents }
>
type ContentsTagAuto = keyof PickByValue<
  typeof contentsTagRecord,
  { type: AutoContents }
>
export type ContentsTag = ContentsTagAuto | ContentsTagManual

export type LinkItemRecordConditions = Record<
  string,
  { message: string; icon: ReactNode; title: string; domain: string[] }
>

export const linkItems = keys(linkItemRecord)
export type LinkItem = (typeof linkItems)[number]

type LinkDetail = { url: string; type: LinkItem; message?: string }

export type Source = {
  id: number
  title: string
  description: string
  date: string
  summary: string
  link?: LinkDetail[]
  img?: string
  tag: ContentsTag[]
  visible: boolean
  recent: boolean
  logo: Logo
  score?: 0 | 1 | 2 | 3 | 4 | 5
}

export type SourceOmited = Omit<
  Source,
  "id" | "tag" | "link" | "visible" | "recent" | "logo"
> & {
  tag: ContentsTagManual[]
  link?: (string | LinkDetail)[]
}

const linkDetailSuggester = (url: string): LinkDetail => {
  for (const [lt, lnk] of entries(linkItemRecord)) {
    if (
      lnk.domain.some(
        (x) =>
          url.startsWith(`https://${x}/`) ||
          url.startsWith(`https://www.${x}/`),
      )
    ) {
      return { url, type: lt }
    }
  }
  return { url, type: "other" }
}

const compareSource = (a: Source, b: Source) => {
  // pick up recent item
  if (a.recent && !b.recent) return -1
  if (!a.recent && b.recent) return 1

  // compare score
  if ((a.score ?? 0) > (b.score ?? 0)) return -1
  if ((a.score ?? 0) < (b.score ?? 0)) return 1

  // compare date
  return b.date.localeCompare(a.date)
}

export type TreeLogosConditions = { conditions: string; logo: Logo }[]

const getLogo = (tags: Source["tag"]): Logo => {
  for (const logo of treeLogos) {
    if (tags.includes(logo.conditions)) return logo.logo
  }
  for (const tag of tags) {
    if ("logo" in contentsTagRecord[tag]) {
      return (contentsTagRecord[tag] as { logo: Logo }).logo
    }
  }
  return {
    icon: <WorkspacePremiumIcon />,
    color: "#000000",
  }
}

function fixSource(s: SourceOmited, i: number) {
  const link: Source["link"] = s.link?.map((x) =>
    typeof x === "string" ? linkDetailSuggester(x) : x,
  )
  const tag: Source["tag"] = [
    ...s.tag,
    ...(link?.some(
      (x) => x.type === "deno" || x.type === "jsr" || x.type === "npm",
    )
      ? (["パッケージ配布有"] as const)
      : []),
    ...(link?.some((x) => x.type === "github")
      ? (["リポジトリ有"] as const)
      : []),
    ...(link?.some(
      (x) => x.type === "note" || x.type === "qiita" || x.type === "zenn",
    )
      ? (["記事有"] as const)
      : []),
    ...(link?.some((x) => x.type === "codepen" || x.type === "codesandbox")
      ? (["デモ有"] as const)
      : []),
  ]

  const logo = getLogo(s.tag)

  const date = new Date(s.date)
  // 半年以内の記事はnewマークを表示
  const recent = Date.now() - date.getTime() < 1000 * 60 * 60 * 24 * 180

  return {
    ...s,
    tag,
    logo,
    link,
    visible: true,
    id: i,
    recent,
  } satisfies Source
}

export const sources = sourcesOrigin.map(fixSource).toSorted(compareSource)

const sourcesValue = Object.values(sources)
export const contentsTagCount = Object.fromEntries(
  contentsTags.map((tag): [ContentsTag, number] => {
    return [
      tag,
      sourcesValue.reduce((acc, x) => (x.tag.includes(tag) ? acc + 1 : acc), 0),
    ]
  }),
) as Record<ContentsTag, number>

export const myhistory = [...historyOrigin.map(fixSource), ...sources].toSorted(
  (a, b) => a.date.localeCompare(b.date),
)
