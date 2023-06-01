import MarkdownIt from 'markdown-it';
import MarkdownItContainer from 'markdown-it-container'
import markdownItAttrs from 'markdown-it-attrs'
import Token from 'markdown-it/lib/token';
const hljs = require('highlight.js');

export default function renderMarkdown(markdown: string): string {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    xhtmlOut: true,
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
    var src = tokens[idx].attrs[0][1];
    var title = tokens[idx].attrs[0][2];
    var alt = tokens[idx].children[0].content;

    return `<p>
      <img src='${src}' data-lazy-src='${src}' alt='${alt}' title='${alt}'/>
      <div class="markdown-img-alt">${alt}</div>
    </p>`
  }

  // 自定义table
  md.renderer.rules.table_open = function (tokens: any, idx, options, env, self) {
    return '<div class="table-box"><table>'
  }

  md.renderer.rules.table_close = function (tokens: any, idx, options, env, self) {
    return '</table></div>'
  }

  // 代码高亮
  md.use(require('markdown-it-highlightjs'));

  // 自定义代码块的渲染方法
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token: any = tokens[idx];

    // 如果当前标记是代码块的开始标记
    if (token.type === 'fence') {
      // 获取代码块的语言
      const lang = token.info.trim();
      const code = token.content.trim();
      const codeLenth = new Array((token?.map?.[1] - token?.map?.[0] - 2) || 0).fill(1)

      // 如果指定了代码块的语言
      if (lang) {
        // 使用 highlight.js 库来高亮代码
        const result = hljs.highlight(code, { language: lang });

        let lineDemo = ''
        codeLenth.forEach((i, index) => {
          lineDemo += `\n<span class="line">${index + 1}</span>`
        })

        // 返回自定义的代码块渲染结果
        return `<figure class="highlight ${result.language}">
          <div class="highlight-tools">
            <div>${result.language}</div>
            <div><i class='iconfont icon-copy highlight-copy-icon'></i></div>
          </div>
          <table>
            <tbody>
              <td class="gutter">
                <pre>
                  ${lineDemo}
                </pre>
              </td>
              <td class="code">
                <pre>
                  \n ${result.value.trim()}
                </pre>
              </td>
            </tbody>
          </table>
        </figure>`
        // return `<pre><code class="hljs ${result.language}">${result.value}</code></pre>\n`;
      }

      // 如果没有指定代码块的语言
      return `<pre><code>${code}</code></pre>\n`;
    }

    // 使用默认的渲染方法来渲染其他类型的标记
    return self.renderToken(tokens, idx, options);
  };





  return md.render(markdown);
}
