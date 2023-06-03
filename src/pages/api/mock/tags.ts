// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSpecificFile } from "@/utils/index";

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function tags(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fs = require("fs");
  const path = require("path");
  let data = await getSpecificFile(fs, path, "./src/data/tags.json");
  res.status(200).json(data)
}
