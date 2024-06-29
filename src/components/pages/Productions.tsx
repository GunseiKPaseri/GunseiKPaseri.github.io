import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { ContentsList } from "../template/ContentsList.tsx"

function App() {
  return (
    <Container>
      <Card sx={{ padding: 2, mb: 2 }}>
        <CardContent>
          <Typography variant="h4" color="inherit">
            成果物・取り組み・実績
          </Typography>
          <Typography variant="body1">
            これまで作成したものを並べておきます。興味あるところを検索してみてください。
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} size="small" to={"/"}>
            トップページへ
          </Button>
        </CardActions>
      </Card>
      <ContentsList />
    </Container>
  )
}

export default App
