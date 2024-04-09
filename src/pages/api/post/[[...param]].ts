import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const  param  = req.query.param as string[] | undefined;
    res.end(`Post ${param ? param.join(', ') : ''}`);
}