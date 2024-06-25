import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import { useState } from "react"
import { MdNewReleases as NewReleasesIcon } from "react-icons/md"

import { type Source } from "../source.ts"
import { CardLinkButton } from "./CardLinkButton.tsx"
import { Markdown } from "./Markdown.tsx"
import { TagList } from "./TagList.tsx"
import { ExpandMore } from "./util/ExpandMore.tsx"

const NewBudge = () => {
  const theme = useTheme()
  return (
    <Tooltip title="半年以内に公開">
      <IconButton style={{ marginRight: "0.2em" }}>
        <NewReleasesIcon color={theme.palette.primary.light} />
      </IconButton>
    </Tooltip>
  )
}

export const ContentsCard = (props: { source: Source }) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const date = new Date(props.source.date)
  const dateString = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.source.recent && <NewBudge />}
          <Markdown>{props.source.title}</Markdown>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          公開日: {dateString}
        </Typography>
        <TagList tags={props.source.tag} />
        <Markdown
          overrides={{
            p: { component: Typography, props: { color: "text.secondary" } },
          }}
        >
          {props.source.summary}
        </Markdown>
      </CardContent>
      {props.source.img && (
        <CardMedia
          sx={{ height: 140 }}
          image={props.source.img}
          title={props.source.title}
        />
      )}
      <CardActions disableSpacing>
        <Stack spacing={1} direction="row">
          {props.source.link && (
            <>
              {props.source.link.map((x) => (
                <CardLinkButton key={x.url} link={x} />
              ))}
            </>
          )}
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
        <Markdown>{props.source.description}</Markdown>
      </Collapse>
    </Card>
  )
}
