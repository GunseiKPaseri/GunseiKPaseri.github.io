import Link from '@mui/material/Link';
import ReactMarkdown from 'markdown-to-jsx';

export const Markdown: React.FC<{children: string}> = (props) => {
  return <ReactMarkdown options={{
    overrides: {
      a: { component: Link, props: { target: '_blank' } },
    }
  }}>
    {props.children}
  </ReactMarkdown>;
};