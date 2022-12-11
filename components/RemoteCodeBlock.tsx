import React, { Fragment, useEffect } from "react";
import { Code, Pre } from "nextra/components";

export const useRemoteCodeBlock = (
  fileUrl: string,
  lang: string,
  lines?: [number, number]
) => {
  const [content, setContent] = React.useState<null | string>(null);

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(
        `/api/remotecode?url=${encodeURIComponent(fileUrl)}&lang=${lang}`
      );
      if (response.ok) {
        const allContent = await response.text();
        let wanted = allContent;

        if (lines) {
          const [start, end] = lines;
          const explodedContent = allContent.split("\n");

          wanted = explodedContent.slice(start - 1, end - 1).join("\n");
        }

        setContent(wanted);
      }
    };

    doFetch();
  }, [JSON.stringify({ fileUrl })]);

  return content;
};

const RemoteCodeBlock = (props: {
  children: React.ReactNode;
  fileUrl: string;
  lines?: [number, number];
  title?: string;
  showLineNumbers?: boolean;
  language?: "ts" | "tsx";
  jsx;
  sh;
}) => {
  const content = useRemoteCodeBlock(
    props.fileUrl,
    props.language ?? "tsx",
    props.lines
  );

  if (content == null) return null;

  return (
    <>
      <Pre>
        <Code dangerouslySetInnerHTML={{ __html: content }} />
      </Pre>
      {props.showLineNumbers && (
        <a target="_blank" href={props.fileUrl}>
          See the full file
        </a>
      )}
    </>
  );
};

export default RemoteCodeBlock;
