import * as shiki from "shiki";

export async function getRemoteCodeSnippet({
  lang,
  url,
  lines
}: {
  url: string;
  lang: string;
  lines?: [number, number];
}) {
  const highlighter = await shiki.getHighlighter({
    theme: "css-variables",
  });

  let code = await fetch(url).then((res) => res.text());

  if(lines){
    const [start, end] = lines;
    const explodedContent = code.split("\n");

    code = explodedContent.slice(start - 1, end - 1).join("\n");
  }

  return highlighter.codeToHtml(code, { lang });
}
