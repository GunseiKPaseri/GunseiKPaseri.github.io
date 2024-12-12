import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useNavigate } from "react-router-dom"
import type { Source } from "../../sourceMeta.tsx"
import { CardLinkButton } from "../atom/CardLinkButton.tsx"
import { Markdown } from "../atom/Markdown.tsx"
import { NewBudge } from "../atom/NewBudge.tsx"
import { TagList } from "./TagList.tsx"

export const ContentsCardExpanded = (props: { source: Source }) => {
  const navigate = useNavigate()
  const date = new Date(props.source.date)
  const dateString = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`

  return (
    <Card sx={{ width: "100%", display: "flex" }}>
      {props.source.img && (
        <CardMedia
          sx={{ width: 300 }}
          image={props.source.img}
          title={props.source.title}
        />
      )}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
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

          <Box sx={{ p: 1, pt: 0 }}>
            <TagList
              tags={props.source.tag}
              onClick={(_, active) => {
                if (!active) navigate("/productions")
                return true
              }}
            />
          </Box>
          <Box sx={{ p: 1 }}>
            <Markdown>{props.source.description}</Markdown>
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          <Stack spacing={1} direction="row">
            {props.source.link?.map((x) => (
              <CardLinkButton key={x.url} link={x} />
            ))}
          </Stack>
        </CardActions>
      </Box>
    </Card>
  )
}
