import Box from "@mui/material/Box"
import { useContext } from "react"
import type { ContentsTag } from "../../sourceMeta"
import { appContext } from "../../state/context"
import { type OnClick, TagChip } from "../atom/TagChip"

export const TagList = (props: {
  tags: readonly ContentsTag[]
  onClick?: OnClick
}) => {
  const context = useContext(appContext)
  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      {props.tags.map((x) => (
        <TagChip
          key={x}
          tag={x}
          onClick={
            props.onClick !== undefined
              ? () => props.onClick?.(x, context.selectedTags.includes(x))
              : undefined
          }
        />
      ))}
    </Box>
  )
}
