import Grid from "@mui/material/Grid2"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useMemo, useState } from "react"

import { sources } from "../../sourceMeta"
import { type ContentsTag, contentsTags } from "../../sourceMeta"
import { appContext } from "../../state/context"
import { ContentsCard } from "../molecules/ContentsCard"
import { SearchCard } from "./SearchCard"

const reRegExp = /[\\^$.*+?()[\]{}|]/g

const escapeRegExp = (str: string) => {
  return str.replace(reRegExp, "\\$&")
}

const normalize = (str: string) => str.normalize().toLowerCase()
const normalizeMarkRegExp = (keyword: string) =>
  new RegExp(`(${escapeRegExp(normalize(keyword))})`, "ig")

const findSource = (keyword: string, selectedTags: ContentsTag[]) => {
  const filteredSource =
    selectedTags.length === 0
      ? sources
      : sources.filter((x) => selectedTags.every((t) => x.tag.includes(t)))
  const normalizedKeyword = normalize(keyword)
  if (keyword === "") return filteredSource
  const rg = normalizeMarkRegExp(keyword)
  const matchedTags = new Set(
    contentsTags.filter((x) => normalize(x).includes(normalizedKeyword)),
  )
  return filteredSource.map((x) => ({
    ...x,
    title: x.title.replaceAll(rg, "<mark>$1</mark>"),
    summary: x.summary.replaceAll(rg, "<mark>$1</mark>"),
    description: x.description.replaceAll(rg, "<mark>$1</mark>"),
    visible:
      normalize(x.title).includes(normalizedKeyword) ||
      normalize(x.summary).includes(normalizedKeyword) ||
      normalize(x.description).includes(normalizedKeyword) ||
      x.tag.some((t: ContentsTag) => matchedTags.has(t)),
  }))
}

export const ContentsList = () => {
  const context = useContext(appContext)
  const [searchWord, setSearchWord] = useState("")
  const narrowDownSources = useMemo(
    () => findSource(searchWord, context.selectedTags),
    [searchWord, context.selectedTags],
  )

  return (
    <>
      <SearchCard
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        narrowDownSources={narrowDownSources}
      />
      <Grid container spacing={2}>
        <AnimatePresence mode="popLayout">
          {narrowDownSources
            .filter((x) => x.visible)
            .map((x) => {
              return (
                <Grid key={x.id} size={{ xs: 12, sm: 6 }}>
                  <motion.div
                    key={x.id}
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "tween" }}
                  >
                    <ContentsCard source={x} />
                  </motion.div>
                </Grid>
              )
            })}
        </AnimatePresence>
      </Grid>
    </>
  )
}
