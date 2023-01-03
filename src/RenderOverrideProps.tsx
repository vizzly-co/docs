import React from "react";

type PropDefinition = {
  type: "array" | "string";
  enum?: string[];
  items?: any[];
};

type Props = {
  override: {
    name: string;
    description: string;
    propSchema: {
      [key: string]: PropDefinition;
    };
  };
};

const RenderPropDefinitions = (props: PropDefinition) => {

};

export const RenderOverrideProps = (props: Props) => {
  const { override } = props;

  return (
    <div style={{ marginBottom: "20px", background: 'rgba(255, 255, 255, 0.01)', borderRadius: '10px', padding: '20px' }}>
      <h3 style={{ fontWeight: 700, fontSize: "1.4rem" }} id={override.name}>
        {override.name}
      </h3>
      <p>{override.description}</p>
      <div style={{marginTop: '5px', marginBottom: '5px'}}>
        <code>{override.name}(props: Props) {'=>'} JSX.Element</code>
      </div>

      {Object.keys(override.propSchema).length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <strong>Props</strong>

          <ul style={{ marginTop: "0" }}>
            {Object.entries(override.propSchema).map(
              ([propKey, definition]) => (
                <li>
                  {propKey}: [{definition.type}]
                  {definition.enum && (
                    <p>
                      One of <code>{definition.enum.join(" | ")}</code>
                    </p>
                  )}
                  {definition.type == "array" && (
                    <pre>{JSON.stringify(definition.items, null, 2)}</pre>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
