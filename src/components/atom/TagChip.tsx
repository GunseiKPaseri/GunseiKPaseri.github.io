import Chip from "@mui/material/Chip"
import { useContext } from "react"

import Box from "@mui/material/Box"
import Tooltip from "@mui/material/Tooltip"
import { useTheme } from "@mui/material/styles"

import { IconContext } from "react-icons"
import { contentsTagRecord } from "../../source"
import { type ContentsTag, contentsTagCount } from "../../sourceMeta"
import { appContext, tagClick } from "../../state/context"

const FixedChipIcon = (props: { children: React.ReactNode }) => (
  <IconContext.Provider value={{ size: "1.2em" }}>
    <Box
      sx={{
        ml: "0.5ex",
        position: "relative",
        top: "0.35ex",
        left: "0.1ex",
        pr: "0.5ex",
      }}
    >
      {props.children}
    </Box>
  </IconContext.Provider>
)

const TagIcon = (props: { tag: ContentsTag; active: boolean }) => {
  const result = contentsTagRecord[props.tag] ?? undefined
  if (result && "logo" in result)
    return (
      <span
        style={
          props.active
            ? {
                color: result.logo.color,
                backgroundColor:
                  "backgroundColor" in result.logo
                    ? result.logo.backgroundColor
                    : undefined,
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
              }
            : undefined
        }
      >
        <FixedChipIcon>{result.logo.icon}</FixedChipIcon>
      </span>
    )
  return <></>
}

const TagNumber = (props: { num: number; active: boolean }) => {
  const theme = useTheme()
  return (
    <span
      style={{
        display: "inline-block",
        width: "1.8em",
        height: "1.8em",
        fontSize: "0.75em",
        borderRadius: "0.9em",
        border: "1px solid",
        color: props.active
          ? theme.palette.primary.main
          : theme.palette.text.secondary,
        borderColor: props.active
          ? theme.palette.primary.main
          : theme.palette.grey[400],
        textAlign: "center",
        marginLeft: "0.2em",
        marginRight: "0.2em",
      }}
    >
      {props.num}
    </span>
  )
}

export type OnClick = (tag: ContentsTag, active: boolean) => boolean | undefined

export const TagChip = (props: {
  tag: ContentsTag
  onClick?: OnClick
}) => {
  const context = useContext(appContext)
  const active = context.selectedTags.includes(props.tag)
  return (
    <Tooltip title={contentsTagRecord[props.tag].description}>
      <Chip
        color={active ? "primary" : "default"}
        icon={<TagIcon active={active} tag={props.tag} />}
        label={props.tag}
        variant="outlined"
        size="small"
        sx={{ margin: "0.2em", fontSize: "0.85em" }}
        onClick={() => {
          const effect =
            props.onClick !== undefined
              ? props.onClick(props.tag, active)
              : undefined
          if (effect !== false) {
            context.dispatch(tagClick(props.tag))
          }
        }}
        onDelete={() => undefined}
        deleteIcon={
          contentsTagCount[props.tag] ? (
            <TagNumber num={contentsTagCount[props.tag]} active={active} />
          ) : undefined
        }
      />
    </Tooltip>
  )
}
