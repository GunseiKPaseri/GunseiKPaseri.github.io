import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { type Source } from '../source.ts';
import { Markdown } from './Markdown.tsx';
import { TagList } from './TagList.tsx';
import { CardLinkButton } from './CardLinkButton.tsx';
import Stack from '@mui/material/Stack';
import { ExpandMore } from './util/ExpandMore.tsx';


export const ContentsCard = (props: {source: Source}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Card sx={{width: "100%"}}>
      <CardContent>
        <Typography variant="h5" component="div"><Markdown>{props.source.title}</Markdown></Typography>
        <TagList tags={props.source.tag} />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Markdown>{props.source.summary}</Markdown>
        </Typography>
      </CardContent>
      {
        props.source.img &&
        <CardMedia
          sx={{ height: 140 }}
          image={props.source.img}
          title={props.source.title}
        />
      }
      <CardActions disableSpacing>
        <Stack spacing={1} direction="row">
          {
            props.source.link &&
              <>
                {
                  props.source.link.map(x => <CardLinkButton key={x.url} link={x} />)
                }
              </>
          }
        </Stack>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{p: 1}}>
        <Typography variant="body1">
          <Markdown>{props.source.description}</Markdown>
        </Typography>
      </Collapse>
    </Card>
  )
};
