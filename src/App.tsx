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
            <a href="https://github.com/GunseiKPaseri" target="_blank" title="GitHub @GunseiKPaseri" style={{paddingRight: "0.2em"}}><img src="https://badges.pufler.dev/repos/GunseiKPaseri" alt="GitHub repos" style={{height: "1.3em"}} /></a>
            <a href="https://atcoder.jp/users/GunseiKPaseri" target="_blank" title="AtCoder @GunseiKPaseri" style={{paddingRight: "0.2em"}}><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FGunseiKPaseri" alt="AtCoder Rates" style={{height: "1.3em"}} /></a>
            <a href="https://qiita.com/GunseiKPaseri" target="_blank" title="Qiita @GunseiKPaseri" style={{paddingRight: "0.2em"}}><img src="https://badgen.org/img/qiita/GunseiKPaseri/articles?style=flat" alt="Qiita Articles" style={{height: "1.3em"}} /></a>
            <a href="https://zenn.dev/gunseikpaseri" target="_blank" title="Zenn @gunseikpaseri" style={{paddingRight: "0.2em"}}><img src="https://badgen.org/img/zenn/gunseikpaseri/articles?style=flat" alt="Zenn Articles" style={{height: "1.3em"}} /></a>
          </Typography>
        </Paper>
      </Paper>
      <ContentsList />
    </Container>
  )
}

export default App
