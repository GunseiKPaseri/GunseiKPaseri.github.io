import Box from "@mui/material/Box";
import type { ContentsTag } from "../source";
import { TagChip } from "./TagChip";

export const TagList = (props: {tags: readonly ContentsTag[]}) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: 'wrap'}}>
      {props.tags.map(x => <TagChip key={x} tag={x} />)}
    </Box>
  )
}