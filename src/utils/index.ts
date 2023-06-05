export const getMdFiles = async (fs: any, path: any, dirPath: any): Promise<any> => {
  const files = await fs.promises.readdir(dirPath); // 读取文件夹下的所有文件
  const mdFiles = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.promises.stat(filePath); // 获取文件状态信息
    const text = await fs.readFileSync(filePath, 'utf8')
    if (stat.isFile() && path.extname(filePath) === '.md') { // 判断是否是文件和是否是 .md 文件
      mdFiles.push(text);
    } else if (stat.isDirectory()) { // 如果是文件夹则递归调用函数
      // log('文件夹')
      mdFiles.push(...await getMdFiles(fs, path, filePath));
    }
  }

  return mdFiles;
}

// 获取具体某些文件下的内容
export const getSpecificFile = async (fs: any, path: any, dirPath: string): Promise<any> => {
  const filePath = path.join(dirPath);
  let fileData = ''
  try {
    fileData = await fs.readFileSync(filePath, {
      encoding: "utf-8",
    })
  } catch (err) {
    return []
  }
  return JSON.parse(fileData)
}

export const getSpecificFileMarkdown = async (fs: any, path: any, dirPath: string): Promise<any> => {
  const filePath = path.join(dirPath);
  let fileData = ''
  try {
    fileData = await fs.readFileSync(filePath, "utf8")
  } catch (err) {
    return ''
  }
  return fileData
}

export const isInViewport = (dom: Element): boolean => {
  // 兼容写法
  let viewPortHeight = window.innerHeight || dom.clientHeight
  let viewPortWidth = window.innerWidth || dom.clientWidth
  let {
    top,
    left,
    bottom,
    right
  } = dom.getBoundingClientRect()

  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= viewPortHeight &&
    right <= viewPortWidth
  )
}

