import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import { Link } from "react-router-dom"

import Timeline from "@mui/lab/Timeline"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import { Container, Paper, Typography } from "@mui/material"
import { sources } from "../../sourceMeta"

export default function TimelinePage() {
  return (
    <Container>
      <Card sx={{ padding: 2, mb: 2 }}>
        <CardContent>
          <Typography variant="h4" color="inherit">
            沿革
          </Typography>
          <Typography variant="body1">
            これまでの人生を時系列に並べてみました。
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} size="small" to={"/"}>
            トップページ
          </Button>
        </CardActions>
      </Card>
      <Paper>
        <Timeline position="alternate">
          {sources
            .toSorted((a, b) => a.date.localeCompare(b.date))
            .map((source) => (
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {source.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      color: source.logo.color,
                      bgColor: source.logo.backgroundColor ?? "#fff",
                    }}
                    variant="outlined"
                  >
                    {source.logo.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {source.title}
                  </Typography>
                  <Typography>{source.summary}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </Paper>
    </Container>
  )
}
