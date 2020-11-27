import React, { ReactNode } from "react";
import { Heading } from "./Elements";
import { Link } from "react-router-dom";
import { Block } from "./Grid";
import { animated, useTransition } from "react-spring";

export const Projects = ({ children }: { children?: ReactNode }) => {
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
    from: { opacity: 0, transform: "translate3d(50px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 500 },
    trail: 300,
  });

  return (
    <section>
      <h3 style={{ marginBottom: "1em" }}>
        You have {React.Children.count(children)} projects.
      </h3>
      <Block type="minor" withStyle="is-muted-alt">
        {transitions.map(({ props, key }) => (
          <animated.div key={key} style={{ ...props }} className="is-divided">
            <Project />
          </animated.div>
        ))}
      </Block>
    </section>
  );
};
export const Project = () => (
  <article>
    <Heading type="minor">Project</Heading>
    <Link to="/dashboard/projects/1">View project</Link>
  </article>
);
