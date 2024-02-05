import { useContext } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { ContentsCard } from "./ContentsCard";
import { sources, contentsTags } from "../source";
import { appContext } from "../state/context";
import { TagList } from "./TagList";

export const ContentsList = () => {
  const context = useContext(appContext);
  const narrowDownSources = context.selectedTags.length === 0
    ? sources
    : sources.filter(x => context.selectedTags.every((t => x.tag.includes(t))))
  return (
    <>
      <Paper sx={{padding: 2, mb: 2}}>
        <Typography variant="h5" color="inherit">タグ</Typography>
        <TagList tags={contentsTags} />
        <Typography variant="body1" sx={{mt: 1}}>
          全<strong>{narrowDownSources.length}</strong>/{sources.length}件
        </Typography>
      </Paper>
      <Grid
        container
        spacing={2}
      >
        {
          narrowDownSources.map(x => {
            return (
              <Grid
                key={x.id}
                width="50%"
                display="flex"
                flexWrap="wrap"
                direction="column"
              >
                <ContentsCard source={x}/>
              </Grid>
            )
          })
        }
      </Grid>

    </>
  );
}