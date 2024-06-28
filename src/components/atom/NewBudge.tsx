import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import { useTheme } from "@mui/material/styles"
import { MdNewReleases as NewReleasesIcon } from "react-icons/md"

export function NewBudge() {
  const theme = useTheme()
  return (
    <Tooltip title="半年以内に公開">
      <IconButton style={{ marginRight: "0.2em" }}>
        <NewReleasesIcon color={theme.palette.primary.light} />
      </IconButton>
    </Tooltip>
  )
}
