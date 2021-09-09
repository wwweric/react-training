// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  cats: {
    id: number,
    name: string,
    sex: 1 | 2
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({cats: [{
    id: 0,
    name: 'momo',
    sex: 2
  },
  {
    id: 1,
    name: 'tama',
    sex: 1
  },
  {
    id: 2,
    name: 'ben',
    sex: 1
  }]})
}
