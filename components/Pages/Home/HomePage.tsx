import { FunctionComponent } from "react";

interface Props {
  isSSR: boolean;
  isStatic: boolean;
}

export const HomePage: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div>{props.isSSR ? <h2>SSR Working</h2> : <h2>SSR Not Works</h2>}</div>
      <div>
        <h2 style={{ fontStyle: "italic" }}>
          {props.isStatic ? "Static generated" : "is Not Static"}
        </h2>
      </div>
      <span>Normal text</span>
    </div>
  );
};
