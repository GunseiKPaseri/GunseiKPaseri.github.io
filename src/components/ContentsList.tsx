import { useContext, useMemo, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AnimatePresence, motion } from "framer-motion";

import { ContentsCard } from "./ContentsCard";
import { Source, sources, type ContentsTag } from "../source";
import { appContext } from "../state/context";
import { SearchCard } from "./SearchCard";

const reRegExp = /[\\^$.*+?()[\]{}|]/g

const escapeRegExp = (str: string) => {
  return str.replace(reRegExp, '\\$&')
}

const normalize = (str: string) => str.toLowerCase();
const normalizeMarkRegExp = (keyword: string) => new RegExp(`(${escapeRegExp(normalize(keyword))})`, "ig");

const findSource = (keyword: string, selectedTags: ContentsTag[]) => {
  const filteredSource = selectedTags.length === 0
    ? sources
    : sources.filter(x => selectedTags.every((t => x.tag.includes(t))))
  const normalizedKeyword = normalize(keyword);
  if (keyword === "") return filteredSource;
  const rg = normalizeMarkRegExp(keyword)
  return filteredSource
    .map(x=>({
      ...x,
      title: x.title.replaceAll(rg, `<mark>$1</mark>`),
      summary: x.summary.replaceAll(rg, `<mark>$1</mark>`),
      description: x.description.replaceAll(rg, `<mark>$1</mark>`),
      visible: (
        normalize(x.title).includes(normalizedKeyword)
        || normalize(x.summary).includes(normalizedKeyword)
        || normalize(x.description).includes(normalizedKeyword)
      )
    }))
}

const compareSource = (a: Source, b: Source) => {
  // pick up recent item
  if(a.recent && !b.recent) return -1;
  if(!a.recent && b.recent) return 1;

  // compare score
  if((a.score ?? 0) > (b.score ?? 0)) return -1;
  if((a.score ?? 0) < (b.score ?? 0)) return 1;

  // compare date
  return b.date.localeCompare(a.date);
}

export const ContentsList = () => {
  const context = useContext(appContext);
  const [searchWord, setSearchWord] = useState("");
  const narrowDownSources = useMemo(() => findSource(searchWord, context.selectedTags), [searchWord, context.selectedTags]);
  
  return (
    <>
      <SearchCard searchWord={searchWord} setSearchWord={setSearchWord} narrowDownSources={narrowDownSources} />
      <Grid
        container
        spacing={2}
      >
        <AnimatePresence mode="popLayout">
        {

          narrowDownSources.toSorted(compareSource).filter(x=>x.visible).map(x => {
            return (
              <Grid
                key={x.id}
                xs={12}
                sm={6}
              >
                <motion.div
                  key={x.id}
                  layout
                  initial={{scale: 0.8, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  exit={{scale: 0.8, opacity: 0}}
                  transition={{type: "tween"}}
                >
                  <ContentsCard source={x}/>
                </motion.div>
              </Grid>
            )
          })
        }
        </AnimatePresence>
      </Grid>
        

    </>
  );
}