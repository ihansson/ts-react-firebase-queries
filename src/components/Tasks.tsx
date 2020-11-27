import React, { ReactNode } from "react";
import { Block, Grid } from "./Grid";
import { Heading } from "./Elements";
import { Link } from "react-router-dom";
import { useSpring, animated, useTransition } from "react-spring";

export const Tasks = ({ children }: { children?: ReactNode }) => {
  const tasksDueOpacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2500 },
  });

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
        You have{" "}
        <animated.span style={tasksDueOpacity}>
          {React.Children.count(children)}
        </animated.span>{" "}
        tasks due.
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
    <Heading type="minor">Task</Heading>
    <Link to="/projects">View project</Link>
  </Block>
);
