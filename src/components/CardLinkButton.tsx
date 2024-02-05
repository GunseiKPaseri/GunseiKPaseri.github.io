import Button from "@mui/material/Button"

import { linkTypes, type Source } from "../source"

export const CardLinkButton = (props: {link: NonNullable<Source['link']>[number]}) => {
  const result = linkTypes[props.link.type];
  return <Button size="small" href={props.link.url} target="_blank" startIcon={result.icon} sx={{marginLeft: 2}}>{result.message}</Button>
}
