import { useParams } from "react-router";
import { Button, Heading, Intro } from "../Elements";
import { Tasks } from "../Tasks";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label, Select } from "../Form";
import React, { SetStateAction, useState } from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";
import { NavLink } from "react-router-dom";
import {
  Project,
  Task,
  useAddTask,
  useGetProject,
  useGetTasks,
} from "../../api/data";

export const ProjectScreen = () => {
  const { id }: { id: string } = useParams();

  const [error, loading, project]: [string, boolean, Project] = useGetProject(
    id
  );

  const [tasksError, tasksLoading, tasks]: [
    string,
    boolean,
    Array<Task>
  ] = useGetTasks({ projectId: id });

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
            <AddTaskForm projectId={id} />
          </Block>
        </div>
        <NavLink className="is-warning large" to="delete/project">
          Delete Project
        </NavLink>
      </ScreenContent>
    </Screen>
  );
};

const AddTaskForm = ({ projectId }: { projectId: string }) => {
  const [text, setText] = useState("");
  const [assigned, setAssigned] = useState("");
  const [due, setDue] = useState("");

  const { loading, success, error, addTask } = useAddTask(
    projectId,
    text,
    assigned,
    due
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  if (success) return <div>Updated</div>;

  return (
    <Form onSubmit={addTask}>
      <Space>
        <Field name="name">
          <Label>Task Description</Label>
          <Input
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setText(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Field name="name">
          <Label>Task Due</Label>
          <Input
            type="date"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setDue(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Field name="name">
          <Label>Assigned To</Label>
          <Select
            type="user"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setAssigned(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Button>Create</Button>
      </Space>
    </Form>
  );
};
