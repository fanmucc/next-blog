import { log } from "console";

const fs = require('fs');
const path = require('path');

export const getMdFiles = async (dirPath: any): Promise<any> => {
  const files = await fs.promises.readdir(dirPath); // 读取文件夹下的所有文件
  const mdFiles = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.promises.stat(filePath); // 获取文件状态信息
    const text = await fs.readFileSync(filePath, 'utf8')
    if (stat.isFile() && path.extname(filePath) === '.md') { // 判断是否是文件和是否是 .md 文件
      mdFiles.push(text);
    } else if (stat.isDirectory()) { // 如果是文件夹则递归调用函数
      log('文件夹')
      mdFiles.push(...await getMdFiles(filePath));
    }
  }

  return mdFiles;
}

