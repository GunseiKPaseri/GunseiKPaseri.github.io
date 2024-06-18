import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import ReactMarkdown, { type MarkdownToJSX } from 'markdown-to-jsx';

export const Markdown: React.FC<{children: string, overrides?: MarkdownToJSX.Options['overrides']}> = (props) => {
  return <ReactMarkdown options={{
    overrides: {
      a: { component: Link, props: { target: '_blank' } },
      p: { component: Typography },
      ...props.overrides
    }
  }}>
    {props.children}
  </ReactMarkdown>;
};