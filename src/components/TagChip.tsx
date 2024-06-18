import Chip from "@mui/material/Chip";
import { useContext } from "react";

import Box from "@mui/material/Box";

import { appContext, tagClick } from "../state/context";
import { ContentsTag, contentsTagLogo } from "../source";

const FixedChipIcon = (props: {children: React.ReactNode}) => <Box sx={{ml: "0.5ex", position: "relative", top: "0.35ex", left: "0.1ex"}}>{props.children}</Box>;

const TagIcon = (props: {tag: ContentsTag, active: boolean}) => {
  const result = contentsTagLogo[props.tag] ?? undefined;
  if(result && 'logo' in result) return <span style={{color: props.active ? result.logo.color : undefined}}><FixedChipIcon>{result.logo.icon}</FixedChipIcon></span>;
  return <></>;
};

export const TagChip = (props: {tag: ContentsTag}) => {
  const context = useContext(appContext);
  const active = context.selectedTags.includes(props.tag)
  return (
    <Chip
      color={active ? "primary" : "default"}
      icon={<TagIcon active={active} tag={props.tag} />}
      label={props.tag}
      variant="outlined"
      size="small"
      sx={{margin: "0.2em", fontSize: "0.85em"}}
      onClick={() => {
        context.dispatch(tagClick(props.tag))
      }}
    />
  );
};
