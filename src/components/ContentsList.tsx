import { useContext, useMemo, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { ContentsCard } from "./ContentsCard";
import { sources, type ContentsTag, contentsTagsTree } from "../source";
import { appContext } from "../state/context";
import { TagList } from "./TagList";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { ExpandMore } from "./util/ExpandMore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Collapse from "@mui/material/Collapse";
import { Stack } from "@mui/material";

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
  
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
    <>
      <Card sx={{padding: 2, mb: 2}}>
        <CardContent>
          <Typography variant="h4" color="inherit"><SearchIcon />検索</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Stack spacing={1} direction="row">
            <Typography variant="body1" sx={{mt: 1}}>
              全<strong>{narrowDownSources.length}</strong>/{sources.length}件
            </Typography>
          </Stack>
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={{p: 1}}>
          <Typography variant="h5" color="inherit">キーワード</Typography>
          <TextField
            variant="standard"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            sx={{width: '80%'}}
            placeholder="ここに検索ワードを入力" />
          <Typography variant="h5" color="inherit" sx={{mt: 2}}>タグ</Typography>
          <Typography variant="h6" color="inherit" sx={{mt: 2}}>技術</Typography>
          <TagList tags={contentsTagsTree['技術']} />
          <Typography variant="h6" color="inherit" sx={{mt: 2}}>ジャンル</Typography>
          <TagList tags={contentsTagsTree['ジャンル']} />
          <Typography variant="h6" color="inherit" sx={{mt: 2}}>開発形態</Typography>
          <TagList tags={contentsTagsTree['開発形態']} />
          <Typography variant="h6" color="inherit" sx={{mt: 2}}>公開状況</Typography>
          <TagList tags={contentsTagsTree['公開状況']} />
        </Collapse>
      </Card>
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