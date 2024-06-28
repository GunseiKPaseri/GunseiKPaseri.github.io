import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { ContentsList } from "../template/ContentsList.tsx"

function App() {
  return (
    <Container>
      <Card sx={{ padding: 2, mb: 2 }}>
        <CardContent>
          <Typography variant="h4" color="inherit">
            実績
          </Typography>
          <Typography variant="body1">
            これまで作成したものを並べておきます。興味あるところを検索してみてください。
          </Typography>
        </CardContent>
      </Card>
      <ContentsList />
    </Container>
  )
}

export default App
