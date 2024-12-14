import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { contentsTagEntries, sources } from "../../sourceMeta"
import { appContext, tagOnlyClick } from "../../state/context"
import { TagChip } from "../atom/TagChip"

const skill = [
  [4, "充分な自信、経験"],
  [3, "一定の自信、経験"],
  [2, "ある程度の取り組み"],
]

export function SkillScore() {
  const navigate = useNavigate()
  const context = useContext(appContext)
  return (
    <Card sx={{ padding: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h4" color="inherit">
          Skill
        </Typography>
        <Typography variant="h5" color="inherit">
          資格試験
        </Typography>
        <Typography variant="body1" color="inherit">
          <ul>
            {sources
              .filter((x) => x.tag.includes("資格"))
              .map((x) => (
                <li key={x.title}>{x.title}</li>
              ))}
          </ul>
          <TagChip
            key="資格"
            tag="資格"
            onClick={(_, active) => {
              if (!active) navigate("/productions")
              return true
            }}
          />
        </Typography>
        {skill.map(([score, text]) => (
          <div key={score}>
            <Typography variant="h5" color="inherit">
              Level{score} {text}
            </Typography>
            <Typography variant="body1">
              {contentsTagEntries
                .filter(([_, tag]) => "score" in tag && tag.score === score)
                .map(([tag, _]) => (
                  <TagChip
                    key={tag}
                    tag={tag}
                    onClick={(_, active) => {
                      if (active) {
                        return true
                      }
                      context.dispatch(tagOnlyClick(tag))
                      navigate("/productions")
                      return false
                    }}
                  />
                ))}
            </Typography>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
