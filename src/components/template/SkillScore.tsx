import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom"
import { contentsTagEntries } from "../../sourceMeta"
import { TagChip } from "../atom/TagChip"

const skill = [
  [4, "充分な自信と経験、いくつかのプロダクト"],
  [3, "一定の自信と経験"],
  [2, "ある程度の取り組み"],
]

export function SkillScore() {
  const navigate = useNavigate()
  return (
    <Card sx={{ padding: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h4" color="inherit">
          Skill Score
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
                      if (!active) navigate("/productions")
                      return true
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
