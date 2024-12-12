import Container from "@mui/material/Container"

import { sources } from "../../sourceMeta"
import { ContentsCarousel } from "../template/ContentsCarousel"
import { Header } from "../template/Header"
import { SelfIntroduction } from "../template/SelfIntroduction"
import { SkillScore } from "../template/SkillScore"

function App() {
  return (
    <Container>
      <Header />
      <SelfIntroduction />
      <SkillScore />
      <ContentsCarousel sources={sources.filter((x) => (x.score ?? 0) >= 2)} />
    </Container>
  )
}

export default App
