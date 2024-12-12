import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Collapse from "@mui/material/Collapse"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useContext, useState } from "react"

import type { Source } from "../../sourceMeta.tsx"
import { appContext, tagClick } from "../../state/context.ts"
import { CardLinkButton } from "../atom/CardLinkButton.tsx"
import { Markdown } from "../atom/Markdown.tsx"
import { NewBudge } from "../atom/NewBudge.tsx"
import { ExpandMore } from "../util/ExpandMore.tsx"
import { TagList } from "./TagList.tsx"

export const ContentsCard = (props: { source: Source }) => {
  const [expanded, setExpanded] = useState(false)
  const context = useContext(appContext)

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
          {props.source.link?.map((x) => (
            <CardLinkButton key={x.url} link={x} />
          ))}
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
        <Box sx={{ p: 1, pt: 0 }}>
          <TagList
            tags={props.source.tag}
            onClick={(tag) => {
              context.dispatch(tagClick(tag))
              return true
            }}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <Markdown>{props.source.description}</Markdown>
        </Box>
      </Collapse>
    </Card>
  )
}
