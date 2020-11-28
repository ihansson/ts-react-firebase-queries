import React from "react";
import { Block, Grid } from "./Grid";
import { Heading } from "./Elements";
import { animated, useTransition } from "react-spring";
import { Task } from "../api/data";

export const Tasks = ({ tasks = [] }: { tasks?: Array<Task> }) => {
  const transitions = useTransition(tasks, (item) => item.key, {
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    trail: 300,
  });

  return (
    <div>
      <h3 style={{ marginBottom: "1em" }}>You have tasks due.</h3>
      <Grid>
        {transitions.map(({ props, key, item }) => (
          <animated.div
            key={key}
            style={{ ...props, flexGrow: 1, marginRight: "1em" }}
          >
            <TaskListItem task={item} />
          </animated.div>
        ))}
      </Grid>
    </div>
  );
};
export const TaskListItem = ({ task }: { task: Task }) => (
  <Block type="minor" withStyle="is-muted-alt">
    <Heading type="minor">
      {task.text}
      <div style={{ textAlign: "right", marginTop: "0.5em" }}>
        <button className="is-small is-success">Finish</button>
      </div>
    </Heading>
  </Block>
);
