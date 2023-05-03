import MarkdownIt from 'markdown-it';
import MarkdownItContainer from 'markdown-it-container'
import markdownItAttrs from 'markdown-it-attrs'
import Token from 'markdown-it/lib/token';
import { log } from 'console';



export default function renderMarkdown(markdown: string): string {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    xhtmlOut: true
  });
  // md.use(require('markdown-it-container'), 'a', {

  //   validate: function (params) {
  //     return params.trim().match(/^spoiler\s+(.*)$/);
  //   },

  //   render: function (tokens, idx) {
  //     // 通过 tokens[idx].info.trim() 取出 'click me' 字符串
  //     var m = tokens[idx].info.trim().match(/^a\s+(.*)$/);
  //     console.log(tokens[idx]);

  //     // 开始标签的 nesting 为 1，结束标签的 nesting 为 -1
  //     if (tokens[idx].nesting === 1) {
  //       // 开始标签
  //       return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
  //     } else {
  //       // 结束标签
  //       return '</details>\n';
  //     }
  //   }
  // });

  // md.use(markdownItAttrs, {
  //   code: { class: 'code-class' },
  //   h1: { class: 'h1-class' }
  // })

  // md.renderer.rules.text = (tokens: Token[], idx: number, options, env, renderer) => {
  //   // console.log(tokens[idx], options, env, renderer);
  //   console.log(tokens[idx]);
  //   tokens[idx].attrs = [['id', 'title']]
  //   return tokens[idx].content;
  // }

  // md.block.ruler.before('paragraph', '#', function (state, startLine, endLine, silent) {
  //   var ch, level, tmp, token,
  //     pos = state.bMarks[startLine] + state.tShift[startLine],
  //     max = state.eMarks[startLine];

  //   console.log(JSON.parse(JSON.stringify(state)), startLine, endLine);
  //   let text = state.src.substring(pos, max);
  //   console.log(text);

  //   state.line = startLine + 1;
  //   return true
  // })

  // 修改# 转 h1标签相关逻辑
  md.renderer.rules.heading_open = (tokens, idx) => {
    const token = tokens[idx];
    const content = tokens[idx + 1].content
    if (token.nesting === 1) {
      return `<${token.tag} id='${content}'>`;
    } else {
      return `</${token.tag}>`;
    }
  }

  // 修改标签 html 块元素标签渲染逻辑
  md.renderer.rules.html_block = (tokens, idx) => {
    let html = tokens[idx].content;
    // 根据需要修改 HTML 字符串
    html = html.replace(/<p>/g, '<p class="some-class">');
    // 返回修改后的 HTML 字符串
    return html;
  }

  // 修改标签 html 行内元素标签渲染逻辑
  md.renderer.rules.html_inline = (tokens, idx) => {
    // console.log('行内标签');
    let html = tokens[idx].content;
    // 根据需要修改 HTML 字符串
    html = html.replace(/<span>/g, '<span class="some-class">');
    // 返回修改后的 HTML 字符串
    return html;
  }

  // 修改li标签
  // 自定义li标签渲染
  md.renderer.rules.list_item_open = function (tokens, idx, options, env, self) {
    let token = tokens[idx]
    return `<li start='${token?.info}.' markup='${token?.markup}'><p>`
  }

  md.renderer.rules.list_item_close = function (tokens, idx, options, env, self) {
    return '</p></li>\n'
  }

  // 自定义图片
  md.renderer.rules.image = function (tokens: any, idx, options, env, self) {
    console.log('走到了这里');
    console.log(tokens[idx]);

    var src = tokens[idx].attrs[0][1];
    var title = tokens[idx].attrs[0][2];
    var alt = tokens[idx].children[0].content;

    return `<p>
      <img src='${src}' data-lazy-src='${src}' alt='${alt}' title='${alt}'/>
      <div class="markdown-img-alt">${alt}</div>
    </p>`
  }





  return md.render(markdown);
}