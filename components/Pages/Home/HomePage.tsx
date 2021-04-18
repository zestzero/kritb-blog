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
        {props.isStatic ? <h2>Static generated</h2> : <h2>is Not Static</h2>}
      </div>
    </div>
  );
};
