import React, { useEffect } from "react";
import CodeBlock from '@theme/CodeBlock';


export const useRemoteCodeBlock = (fileUrl: string, lines?: [number, number]) => {
  const [content, setContent] = React.useState<null | string>(null);

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(fileUrl);

      if(response.ok) {
        const allContent = await response.text();
        let wanted = allContent;
        
        if(lines){
          const [start, end] = lines;
          const explodedContent = allContent.split('\n');

          wanted = explodedContent.slice(start - 1, end - 1).join('\n');
        }

        setContent(wanted);
      };
    };

    doFetch();
  }, [JSON.stringify({ fileUrl })]);

  return content;
};

const RemoteCodeBlock = (props: {fileUrl: string, lines?: [number, number]; title?: string, showLineNumbers?: boolean, language?: 'ts' | 'tsx', 'jsx', 'sh'}) => {
  const content = useRemoteCodeBlock(props.fileUrl, props.lines);

  if(content == null) return null;

  return (
    <>
      <CodeBlock
        language={props.language}
        title={props.title}
        showLineNumbers={props.showLineNumbers}>
        {content}
      </CodeBlock>
      {props.showLineNumbers && <a target="_blank" href={props.fileUrl}>See the full file</a>}
    </>
  );
};

export default RemoteCodeBlock;