import React, { ReactNode } from "react";
import { Heading } from "./Elements";
import { Link } from "react-router-dom";
import { Block } from "./Grid";

export const Projects = ({ children }: { children?: ReactNode }) => (
  <section>
    <h3 style={{ marginBottom: "1em" }}>
      You have {React.Children.count(children)} projects.
    </h3>
    <Block type="minor" withStyle="is-muted-alt">
      {children}
    </Block>
  </section>
);
export const Project = () => (
  <article className="is-divided">
    <Heading type="minor">Project</Heading>
    <Link to="/dashboard/projects/1">View project</Link>
  </article>
);
