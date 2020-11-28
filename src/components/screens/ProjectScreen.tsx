import { useParams } from "react-router";
import { Button, Heading, Intro } from "../Elements";
import { Tasks } from "../Tasks";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label, Select } from "../Form";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";
import { NavLink } from "react-router-dom";
import { Project, Task, useGetProject, useGetTasks } from "../../api/data";

export const ProjectScreen = () => {
  const { id }: { id: string } = useParams();
  const [error, loading, project]: [string, boolean, Project] = useGetProject(
    id
  );
  const [tasksError, tasksLoading, tasks]: [
    string,
    boolean,
    Array<Task>
  ] = useGetTasks(id);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading</div>;

  return (
    <Screen>
      <ScreenHeader>
        <Heading>Project: {project.id}</Heading>
        <Intro>{project.description}.</Intro>
      </ScreenHeader>
      <ScreenContent>
        {tasksError || tasksLoading ? (
          tasksError ? (
            <div>{tasksError}</div>
          ) : (
            <div>loading</div>
          )
        ) : (
          <Tasks tasks={tasks} />
        )}
        <div
          className="is-muted-alt"
          style={{ margin: "2.5em 0", width: "20em" }}
        >
          <Block type="minor">
            <Heading type="minor">Add Task</Heading>
            <Form>
              <Space>
                <Field name="name">
                  <Label>Task Description</Label>
                  <Input type="text" />
                </Field>
                <Field name="name">
                  <Label>Task Due</Label>
                  <Input type="date" />
                </Field>
                <Field name="name">
                  <Label>Assigned To</Label>
                  <Select type="user" />
                </Field>
                <Button>Create</Button>
              </Space>
            </Form>
          </Block>
        </div>
        <NavLink className="is-warning large" to="delete/project">
          Delete Project
        </NavLink>
      </ScreenContent>
    </Screen>
  );
};
