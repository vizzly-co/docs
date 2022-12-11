import { NextApiRequest, NextApiResponse } from "next";
import * as shiki from "shiki";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.query.url as string;
  const lang = req.query.lang as string;

  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  const code = await fetch(url).then((res) => res.text());

  res.end(highlighter.codeToHtml(code, { lang }));
}
