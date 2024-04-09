import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const redirect = req.query.redirect as string | undefined
    res.setPreviewData({ user: "dinesh" })
    res.redirect(redirect ? redirect.toString() : "")

}