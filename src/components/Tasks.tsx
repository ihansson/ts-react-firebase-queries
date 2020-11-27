import React, { ReactNode } from "react";
import { Block, Grid } from "./Grid";
import { Heading } from "./Elements";
import { animated, useTransition } from "react-spring";

export const Tasks = ({ children }: { children?: ReactNode }) => {
  const items = [
    {
      key: 1,
      text: "A",
    },
    {
      key: 2,
      text: "B",
    },
    {
      key: 3,
      text: "C",
    },
  ];
  const transitions = useTransition(items, (item) => item.key, {
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    trail: 300,
  });

  return (
    <div>
      <h3 style={{ marginBottom: "1em" }}>
        You have {React.Children.count(children)} tasks due.
      </h3>
      <Grid>
        {transitions.map(({ props, key }) => (
          <animated.div
            key={key}
            style={{ ...props, flexGrow: 1, marginRight: "1em" }}
          >
            <Task />
          </animated.div>
        ))}
      </Grid>
    </div>
  );
};
export const Task = () => (
  <Block type="minor" withStyle="is-muted-alt">
    <Heading type="minor">
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      <div style={{ textAlign: "right", marginTop: "0.5em" }}>
        <button className="is-small is-success">Finish</button>
      </div>
    </Heading>
  </Block>
);
