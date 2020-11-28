import React from "react";
import { Heading } from "./Elements";
import { Link } from "react-router-dom";
import { Block } from "./Grid";
import { animated, useTransition } from "react-spring";
import { useGetProjects, Project } from "../api/data";

export const Projects = () => {
  const { error, loading, projects } = useGetProjects();

  const transitions = useTransition(projects, (item) => item.key, {
    from: { opacity: 0, transform: "translate3d(50px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 500 },
    trail: 300,
  });

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading</div>;

  return (
    <section>
      <h3 style={{ marginBottom: "1em" }}>
        You have {projects.length} projects.
      </h3>
      <Block type="minor" withStyle="is-muted-alt">
        {transitions.map(({ props, key, item }) => (
          <animated.div key={key} style={{ ...props }} className="is-divided">
            <ProjectListItem project={item} />
          </animated.div>
        ))}
      </Block>
    </section>
  );
};
export const ProjectListItem = ({ project }: { project: Project }) => (
  <article>
    <div style={{ marginBottom: "1em" }}>
      <Heading type="minor">{project.id}</Heading>
      <small>{project.description}</small>
    </div>
    <Link to={`/dashboard/projects/${project.id}`}>View project</Link>
  </article>
);
