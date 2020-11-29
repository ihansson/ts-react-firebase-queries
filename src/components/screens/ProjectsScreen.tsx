import { Button, Heading, Intro } from "../Elements";
import { Projects } from "../Projects";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label } from "../Form";
import React, { SetStateAction, useState } from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";
import { useAddProject } from "../../api/data";

export const ProjectsScreen = () => {
  return (
    <Screen>
      <ScreenHeader>
        <Heading>Projects</Heading>
        <Intro>Lorem ipsum dolor sit amet.</Intro>
      </ScreenHeader>
      <ScreenContent>
        <Projects />
        <div
          className="is-muted-alt"
          style={{ marginTop: "2.5em", width: "20em" }}
        >
          <Block type="minor">
            <Heading type="minor">Add Project</Heading>
            <AddProjectForm />
          </Block>
        </div>
      </ScreenContent>
    </Screen>
  );
};

const AddProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { loading, error, addProject } = useAddProject(name, description);

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <Form onSubmit={addProject}>
      <Space>
        <Field name="name">
          <Label>Project Name</Label>
          <Input
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setName(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Field name="name">
          <Label>Project Description</Label>
          <Input
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setDescription(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Button>Create</Button>
      </Space>
    </Form>
  );
};
