import Container from '@mui/material/Container';

import { ContentsList } from './components/ContentsList.tsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from '@mui/material/Link';

function App() {
  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          color: 'white',
          mb: 4,
          backgroundColor: 'grey.800',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('./background.png')`,
        }}
      >
        <Grid container>
          <Grid md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                GunseiKPaseri portfolio
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                これまで作成したものをまとめています。
                <Link href="https://atcoder.jp/users/GunseiKPaseri">AtCoder</Link><br />
                <Link href="https://github.com/GunseiKPaseri">GitHub</Link><br />
                <Link href="https://qiita.com/GunseiKPaseri">Qiita</Link><br />
                <Link href="https://zenn.dev/gunseikpaseri">Zenn</Link><br />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <ContentsList />
    </Container>
  )
}

export default App
