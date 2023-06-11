// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSpecificFile } from "@/utils/index";
import blogList from '@/data/blog/index.json';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function tags(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fs = require("fs");
  const path = require("path");
  let data = await getSpecificFile(fs, path, "./src/data/tags.json");
  // 返回 分类 不为空的博客
  let newBlogList = blogList.filter((i: any) => i?.tags && i?.tags?.length);
  while (newBlogList.length > 0) {
    let length = newBlogList.length - 1;
    let tags = newBlogList?.[length]?.tags || [];
    tags.forEach((i: any) => {
      let tagsIndex = data?.findIndex((dataItem: any) => dataItem?.id == i);
      if (tagsIndex !== -1) {
        data[tagsIndex].num = (data?.[tagsIndex]?.num || 0) + 1;
      }
    })
    newBlogList.pop();
  }
  res.status(200).json(data);
}
