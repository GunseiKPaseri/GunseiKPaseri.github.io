import Chip from "@mui/material/Chip";
import { useContext } from "react";
import { appContext, tagClick } from "../state/context";
import { ContentsTag } from "../source";

export const TagChip = (props: {tag: ContentsTag}) => {
  const context = useContext(appContext);
  return (
    <Chip
      color={context.selectedTags.includes(props.tag) ? "primary" : "default"}
      label={props.tag}
      variant="outlined"
      size="small"
      sx={{marginLeft: "0.5em"}}
      onClick={() => {
        context.dispatch(tagClick(props.tag))
      }}
    />
  );
};
