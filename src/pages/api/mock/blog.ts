// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSpecificFile } from "@/utils/index";

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


export default async function blog(
  req: NextApiRequest,
  res: NextApiResponse<IBlog>
) {
  const fs = require("fs");
  const path = require("path");
  let data = await getSpecificFile(fs, path, "./src/data/blog/index.json");
  let newData = data?.map((i: IBlog) => {
    let newCate = i?.categories?.map((cateId: number) => {
      let cateFind = categories?.find((i: ICategories) => i?.id === cateId)
      return cateFind
    }).filter((i) => i?.id)
    let newTags = i?.tags?.map((tagsId: number) => {
      let tagsFind = tags?.find((i: ICategories) => i?.id === tagsId)
      return tagsFind
    }).filter((i) => i?.id)
    return {
      ...i,
      categories: newCate,
      tags: newTags
    }
  })
  res.status(200).json(newData)
}
