import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import {
  contentsTagClassificationRecordEntries,
  contentsTagCount,
  contentsTagEntries,
} from "../../sourceMeta"
import { entries } from "../../util"
import { TagList } from "../molecules/TagList"

export function SeparatedTagList() {
  return (
    <>
      <Typography variant="h5" color="inherit" sx={{ mt: 2 }}>
        タグ
      </Typography>
      {contentsTagClassificationRecordEntries.map(([tagType, tagTypeText]) => (
        <Box key={tagType}>
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
          {"subTags" in tagTypeText &&
            entries(tagTypeText.subTags).map(([subTag, subTagText]) => (
              <Box key={subTag} sx={{ ml: 2 }}>
                <Typography key={subTag} variant="body1" color="inherit">
                  {subTagText.text}
                </Typography>
                <TagList
                  tags={contentsTagEntries
                    .filter(([_, tag]) => tag.type === subTag)
                    .map((x) => x[0])
                    .sort((a, b) => contentsTagCount[b] - contentsTagCount[a])}
                />
              </Box>
            ))}
        </Box>
      ))}
    </>
  )
}
