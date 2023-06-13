// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSpecificFile } from "@/utils/index";
import blogList from '@/data/blog/index.json';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function categories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const fs = require("fs");
    const path = require("path");
    let data = await getSpecificFile(fs, path, "./src/data/categories.json");
    // 返回 分类 不为空的博客
    let newBlogList = blogList.filter((i: any) => i?.categories && i?.categories?.length);
    while (newBlogList.length > 0) {
      let length = newBlogList.length - 1;
      let categories = newBlogList?.[length]?.categories || [];
      categories.forEach((i: any) => {
        let categoriesIndex = data?.findIndex((dataItem: any) => dataItem?.id == i);
        if (categoriesIndex !== -1) {
          data[categoriesIndex].num = (data?.[categoriesIndex]?.num || 0) + 1;
        }
      })
      newBlogList.pop();
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(200).json([]);
  }
}
