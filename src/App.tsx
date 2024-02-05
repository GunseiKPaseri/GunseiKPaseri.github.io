import Container from '@mui/material/Container';

import { ContentsList } from './components/ContentsList.tsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './googlefont.css';

function App() {
  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          color: 'white',
          p: 6,
          mt: 1,
          mb: 3,
          backgroundColor: 'grey.800',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('./background.png')`,
        }}
      >
            <Box
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                <span className='googlefont-orbitron'>GunseiKPaseri portfolio</span>
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                これまで作成したものをまとめています。
              </Typography>
            </Box>
        <Paper sx={{p: 2, backgroundColor: "rgba(255,255,255,0.4)"}}>
          <Typography variant="body1">
            {
              ([
                {href: "https://twitter.com/GunseiKPaseri", alt: "Twitter", imgsrc: "https://img.shields.io/twitter/follow/GunseiKPaseri?style=social", title: "Twitter @GunseiKPaseri"},
                {href: "https://github.com/GunseiKPaseri", alt: "GitHub repos", imgsrc: "https://badges.pufler.dev/repos/GunseiKPaseri", title: "GitHub @GunseiKPaseri"},
                {href: "https://atcoder.jp/users/GunseiKPaseri", alt: "AtCoder Rates", imgsrc: "https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FGunseiKPaseri", title: "AtCoder @GunseiKPaseri"},
                {href: "https://qiita.com/GunseiKPaseri", alt: "Qiita Articles", imgsrc: "https://badgen.org/img/qiita/GunseiKPaseri/articles?style=flat", title: "Qiita @GunseiKPaseri"},
                {href: "https://zenn.dev/gunseikpaseri", alt: "Zenn Articles", imgsrc: "https://badgen.org/img/zenn/gunseikpaseri/articles?style=flat", title: "Zenn @gunseikpaseri"}
              ] satisfies {href: string, alt: string, imgsrc: string, title: string}[])
              .map(x => 
                <a key={x.alt} href={x.href} target="_blank" title={x.title} style={{paddingRight: "0.2em"}}>
                  <img src={x.imgsrc} alt={x.alt} style={{height: "1.3em"}} />
                </a>
              )
            }
          </Typography>
        </Paper>
      </Paper>
      <ContentsList />
    </Container>
  )
}

export default App
