import { useSSG } from 'nextra/ssg'
import { Code, Pre } from "nextra/components";



const RemoteCodeBlock = (props: {
  name?: string;
  showLineNumbers?: boolean;
  fileUrl?: string;
}) => {
  const ssg = useSSG()

  return (
    <>
      <Pre>
        <Code dangerouslySetInnerHTML={{ __html: ssg[props.name ?? "code"] }} />
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
