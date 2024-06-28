import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Link, useRouteError } from "react-router-dom"

function ErrorMessage(code: number) {
  switch (code) {
    case 404:
      return "お探しのページが見つかりませんでした。"
    default:
      return "エラーが発生しました。"
  }
}

export function ErrorPage() {
  const error = useRouteError()
  console.log(error)
  return (
    <Container>
      <Card sx={{ padding: 2, mb: 2 }}>
        <CardContent>
          <Typography variant="h4">エラーが発生しました(´・ω・`)</Typography>
          {typeof error === "object" && error !== null ? (
            <>
              <Typography>
                {`${"status" in error && error.status} ${
                  "statusText" in error
                    ? error.statusText
                    : "message" in error
                      ? error.message
                      : ""
                }`}
              </Typography>
              {"status" in error && typeof error.status === "number" && (
                <Typography>{ErrorMessage(error.status)}</Typography>
              )}
            </>
          ) : null}
        </CardContent>
        <CardActions>
          <Button component={Link} size="small" to={"/"}>
            トップページへ
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
