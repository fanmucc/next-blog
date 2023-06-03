// 总计
interface IBlog {
  title: string;
  categories: number[],
  tags: number[],
  markdownPath: string;
  themeColor?: string;
  img?: string;
  createTime: string
}


const blog: IBlog[] = [
  {
    title: '第一篇文章',
    categories: [1],
    tags: [1, 2],
    markdownPath: './src/markdown/测试第一篇文章.md',
    themeColor: '',
    img: '',
    createTime: '',
  }
]

export default blog