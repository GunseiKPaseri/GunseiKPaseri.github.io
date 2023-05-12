import { ContentsCard } from "./ContentsCard";
import { sources, contentsTags } from "../source";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { TagChip } from "./TagChip";
import { useContext } from "react";
import { appContext } from "../state/context";
import { Typography } from "@mui/material";

export const ContentsList = () => {
  const context = useContext(appContext);
  return (
    <>
      <Paper sx={{padding: 1}}>
        <Typography variant="h5" color="inherit">タグ</Typography>
        {contentsTags.map(x => (<TagChip key={x} tag={x} />))}
      </Paper>
      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        {
          (
            context.selectedTags.length === 0
              ? sources
              : sources.filter(x => context.selectedTags.every((t => x.tag.includes(t)))
          )).map(x => {
            return (
              <Grid
                key={x.id}
                maxWidth={500}
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