import { log } from 'console';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export default function renderMarkdown(markdown: string): string {
  md.use(require('markdown-it-container'), 'spoiler', {
    validate: function (params: string) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
    render: function (tokens: any[], idx: number) {
      console.log(tokens, 'tokens====', idx);

      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  });
  return md.render(markdown);
}
