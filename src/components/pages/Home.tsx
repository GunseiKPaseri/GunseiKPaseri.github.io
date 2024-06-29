import Container from "@mui/material/Container"

import { sources } from "../../sourceMeta"
import { ContentsCarousel } from "../template/ContentsCarousel"
import { Header } from "../template/Header"
import { SelfIntroduction } from "../template/SelfIntroduction"

function App() {
  return (
    <Container>
      <Header />
      <SelfIntroduction />
      <ContentsCarousel sources={sources.filter((x) => (x.score ?? 0) >= 2)} />
    </Container>
  )
}

export default App
