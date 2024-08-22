import Box from "@mui/material/Box"
import { type ContentsTag } from "../../sourceMeta"
import { TagChip } from "../atom/TagChip"

export const TagList = (props: {
  tags: readonly ContentsTag[]
  onClick?: (tag: ContentsTag) => void
}) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      {props.tags.map((x) => (
        <TagChip
          key={x}
          tag={x}
          onClick={
            props.onClick !== undefined ? () => props.onClick?.(x) : undefined
          }
        />
      ))}
    </Box>
  )
}
