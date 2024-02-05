import { useContext, useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { ContentsCard } from "./ContentsCard";
import { sources, contentsTags, type ContentsTag } from "../source";
import { appContext } from "../state/context";
import { TagList } from "./TagList";
import TextField from "@mui/material/TextField";

const findSource = (keyword: string, selectedTags: ContentsTag[]) => {
  const filteredSource = selectedTags.length === 0
    ? sources
    : sources.filter(x => selectedTags.every((t => x.tag.includes(t))))
  return keyword !== "" ? filteredSource
    .filter(x => x.title.includes(keyword) || x.summary.includes(keyword) || x.description.includes(keyword))
    .map(x=>({
      ...x,
      title: x.title.replaceAll(keyword, `<mark>${keyword}</mark>`),
      summary: x.summary.replaceAll(keyword, `<mark>${keyword}</mark>`),
      description: x.description.replaceAll(keyword, `<mark>${keyword}</mark>`),
    })) : filteredSource;
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