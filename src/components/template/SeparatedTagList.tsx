import Typography from "@mui/material/Typography"
import { contentsTagClassificationRecord } from "../../source"
import { contentsTagCount, contentsTagEntries } from "../../sourceMeta"
import { entries } from "../../util"
import { TagList } from "../molecules/TagList"

export function SeparatedTagList() {
  return (
    <>
      <Typography variant="h5" color="inherit" sx={{ mt: 2 }}>
        タグ
      </Typography>
      {entries(contentsTagClassificationRecord).map(
        ([tagType, tagTypeText]) => (
          <>
            <Typography key="title" variant="h6" color="inherit" sx={{ mt: 2 }}>
              {tagTypeText.text}
            </Typography>
            <TagList
              key="taglist"
              tags={contentsTagEntries
                .filter(([_, tag]) => tag.type === tagType)
                .map((x) => x[0])
                .sort((a, b) => contentsTagCount[b] - contentsTagCount[a])}
            />
          </>
        ),
      )}
    </>
  )
}
