import db from "@/modal/index";
import MongoTags from '@/modal/tags'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSpecificFile } from "@/utils/index";
import blogList from '@/data/blog/index.json';

import type { NextApiRequest, NextApiResponse } from 'next';




export default async function tags(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    // const fs = require("fs");
    // const path = require("path");
    // let data = await getSpecificFile(fs, path, "./src/data/tags.json");
    // // 返回 分类 不为空的博客
    // let newBlogList = blogList.filter((i: any) => i?.tags && i?.tags?.length);
    // while (newBlogList.length > 0) {
    //   let length = newBlogList.length - 1;
    //   let tags = newBlogList?.[length]?.tags || [];
    //   tags.forEach((i: any) => {
    //     let tagsIndex = data?.findIndex((dataItem: any) => dataItem?.id == i);
    //     if (tagsIndex !== -1) {
    //       data[tagsIndex].num = (data?.[tagsIndex]?.num || 0) + 1;
    //     }
    //   })
    //   newBlogList.pop();
    // }
    // 启用mongo
    db();
    // 获取到相关接口
    const data = await MongoTags.find({});

    res.status(200).json(data);
  } catch (err) {
    res.status(200).json([]);
  }
}
