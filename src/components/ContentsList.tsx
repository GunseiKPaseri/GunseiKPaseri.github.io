import { useContext, useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { ContentsCard } from "./ContentsCard";
import { sources, contentsTags, type ContentsTag } from "../source";
import { appContext } from "../state/context";
import { TagList } from "./TagList";
import TextField from "@mui/material/TextField";

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
    .filter(x => normalize(x.title).includes(normalizedKeyword) || normalize(x.summary).includes(normalizedKeyword) || normalize(x.description).includes(normalizedKeyword))
    .map(x=>({
      ...x,
      title: x.title.replaceAll(rg, `<mark>$1</mark>`),
      summary: x.summary.replaceAll(rg, `<mark>$1</mark>`),
      description: x.description.replaceAll(rg, `<mark>$1</mark>`),
    }))
}

export const ContentsList = () => {
  const context = useContext(appContext);
  const [searchWord, setSearchWord] = useState("");
  const narrowDownSources = useMemo(() => findSource(searchWord, context.selectedTags), [searchWord, context.selectedTags]);
  return (
    <>
      <Paper sx={{padding: 2, mb: 2}}>
        <Typography variant="h5" color="inherit">キーワード</Typography>
        <TextField
          variant="standard"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          sx={{width: '80%'}}
          placeholder="ここに検索ワードを入力" />
        <Typography variant="h5" color="inherit" sx={{mt: 2}}>タグ</Typography>
        <TagList tags={contentsTags} />
        <Typography variant="body1" sx={{mt: 1}}>
          全<strong>{narrowDownSources.length}</strong>/{sources.length}件
        </Typography>
      </Paper>
      <Grid
        container
        spacing={2}
      >
        {
          narrowDownSources.map(x => {
            return (
              <Grid
                key={x.id}
                sx={(theme) => ({
                  width: "50%",
                  display: "flex",
                  flexWrap: "wrap",
                  direction: "column",
                  [theme.breakpoints.down('md')]: {
                    width: "100%",
                  }
                })}
              >
                <ContentsCard source={x}/>
              </Grid>
            )
          })
        }
      </Grid>

    </>
  );
}