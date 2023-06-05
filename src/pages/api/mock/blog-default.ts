// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSpecificFile, getSpecificFileMarkdown } from "@/utils/index";

// 这里直接引入分类和标签的json文件，就不做接口处理了
import categories from '@/data/categories.json'
import tags from '@/data/tags.json'

import type { NextApiRequest, NextApiResponse } from 'next'
import type { ICategories } from '@/utils/ts.d.ts'

interface IBlog {
  title: string;
  categories: number[];
  tags: number[];
  href: string;
  themeColor: string;
  img: string;
  createTime: string;
  id: number;
}


export default async function blogDefault(
  req: NextApiRequest,
  res: NextApiResponse<IBlog | any>
) {
  const { id } = req.query
  if (!id) {
    res.status(404).json({
      status: 404,
      message: '文章id为必传参数'
    })
    return
  }
  // 先根据id找到相应文章详情
  const fs = require("fs");
  const path = require("path");
  let data = await getSpecificFile(fs, path, "./src/data/blog/index.json");
  let blogDetail = data?.filter((i: IBlog) => i?.id === Number(id))
  if (!blogDefault?.length) {
    res.status(404).json({
      status: 404,
      message: '文章被删除啦，请浏览其他文章!'
    })
    return
  }
  let detail = blogDetail[0]
  // 根据文章详情填充分类和标签
  let newCate = detail?.categories?.map((cateId: number) => {
    let cateFind = categories?.find((i: ICategories) => i?.id === cateId)
    return cateFind
  }).filter((i: ICategories) => i?.id)
  let newTags = detail?.tags?.map((tagsId: number) => {
    let tagsFind = tags?.find((i: ICategories) => i?.id === tagsId)
    return tagsFind
  }).filter((i: ICategories) => i?.id)
  detail = {
    ...detail,
    categories: newCate,
    tags: newTags
  }
  // 获取到相应markdown文件，并返回其内容
  let markdown = await getSpecificFileMarkdown(fs, path, path.join(detail?.markdownPath))
  res.status(200).json({
    detail: detail,
    markdown: markdown
  })
}
