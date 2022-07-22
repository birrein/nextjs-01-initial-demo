// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface IApiResponse {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<IApiResponse>) {
  res.status(200).json({ name: 'John Doe' })
}
