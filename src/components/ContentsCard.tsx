import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';

import {type Source} from '../source.ts';
import { TagChip } from './TagChip.tsx';
import CardMedia from '@mui/material/CardMedia';
import { Markdown } from './Markdown.tsx';

const CardLinkButton = (props: {link: NonNullable<Source['link']>[number]}) => {
  const icon = props.link.type === 'github' ? <GitHubIcon /> : undefined
  const text = props.link.type === 'github' ? '実装' : props.link.type === 'npm' ? 'npm' : 'リンク'
  return <Button size="small" href={props.link.url} target="_blank" startIcon={icon}>{text}</Button>
}

export const ContentsCard = (props: {source: Source}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">{props.source.title}</Typography>
        <>
          {props.source.tag.map(x => <TagChip key={x} tag={x} />)}
        </>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.source.summary}
        </Typography>
        <Markdown>{props.source.description}</Markdown>
      </CardContent>
      {
        props.source.img &&
        <CardMedia
          sx={{ height: 140 }}
          image={props.source.img}
          title={props.source.title}
        />
      }
      {
        props.source.link &&
          <CardActions>
            {
              props.source.link.map(x => <CardLinkButton key={x.url} link={x} />)
            }
          </CardActions>
      }
    </Card>
  )
};
