import Container from "@mui/material/Container"

import { sources } from "../../source.tsx"
import { ContentsCarousel } from "../template/ContentsCarousel.tsx"
import { Header } from "../template/Header.tsx"
import { SelfIntroduction } from "../template/SelfIntroduction.tsx"

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
