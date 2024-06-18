import { useState } from "react";
import Typography from "@mui/material/Typography";
import { sources,  contentsTagsTree, type Source } from "../source";
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

export function SearchCard(props: {
  searchWord: string,
  setSearchWord: (s: string) => void,
  narrowDownSources: Source[]
}){
  const { setSearchWord, searchWord, narrowDownSources } = props;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
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
  )
}