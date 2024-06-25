import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import { type Source, linkTypes } from "../source"
import { useWindowSize } from "../util"

export const CardLinkButton = (props: {
  link: NonNullable<Source["link"]>[number]
}) => {
  const result = linkTypes[props.link.type]
  const [width, _height] = useWindowSize()
  return (
    <Tooltip title={props.link.message ?? result.title}>
      {width < 400 ? (
        <IconButton
          color="primary"
          size="small"
          //title={result.title}
          href={props.link.url}
          target="_blank"
        >
          {result.icon}
        </IconButton>
      ) : (
        <Button
          size="small"
          //title={result.title}
          href={props.link.url}
          target="_blank"
          startIcon={result.icon}
          sx={{ marginLeft: 2 }}
        >
          {props.link.message ?? result.message}
        </Button>
      )}
    </Tooltip>
  )
}
