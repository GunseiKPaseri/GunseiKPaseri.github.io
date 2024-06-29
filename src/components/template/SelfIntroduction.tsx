import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

export function SelfIntroduction() {
  return (
    <Card sx={{ padding: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h4" color="inherit">
          About Me
        </Typography>
        <Typography variant="body1">
          某大学の情報系学科の院生。小さいころからIT領域に関心があり、趣味でも競技プログラミングやWeb開発に取り組んでいます。成果物はTypeScriptとReactが中心なものの、アルゴリズム・OS・インフラ・クラウド・バックエンド・セキュリティ・AI等幅広い技術領域に関心があります。
        </Typography>
        <Typography variant="body1">
          インターネットに本名を載せていいのかまだ信じられずにいます。
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} size="small" to={"/timeline"}>
          沿革
        </Button>
      </CardActions>
    </Card>
  )
}
