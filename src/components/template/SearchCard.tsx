import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SearchIcon from "@mui/icons-material/Search"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Collapse from "@mui/material/Collapse"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { type Source, sources } from "../../sourceMeta"
import { SearchField } from "../atom/SearchField"
import { ExpandMore } from "../util/ExpandMore"
import { SeparatedTagList } from "./SeparatedTagList"

export function SearchCard(props: {
  searchWord: string
  setSearchWord: (s: string) => void
  narrowDownSources: Source[]
}) {
  const { setSearchWord, searchWord, narrowDownSources } = props
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card sx={{ padding: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" color="inherit">
          <SearchIcon />
          検索
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack spacing={1} direction="row">
          <Typography variant="body1" sx={{ mt: 1 }}>
            全
            <strong>{narrowDownSources.filter((x) => x.visible).length}</strong>
            /{sources.length}件
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
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ p: 1 }}>
        <SearchField
          value={searchWord}
          label="検索ワード"
          onChange={setSearchWord}
          onClear={() => setSearchWord("")}
        />
        <SeparatedTagList />
      </Collapse>
    </Card>
  )
}
