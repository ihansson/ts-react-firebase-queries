import { useParams } from "react-router";
import { Button, Heading, Intro } from "../Elements";
import { Task, Tasks } from "../Tasks";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label, Select } from "../Form";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";
import { NavLink } from "react-router-dom";

export const ProjectScreen = () => {
  const { id }: { id: string } = useParams();

  return (
    <Screen>
      <ScreenHeader>
        <Heading>Project: {id}</Heading>
        <Intro>Lorem ipsum dolor sit amet.</Intro>
      </ScreenHeader>
      <ScreenContent>
        <Tasks>
          <Task />
          <Task />
          <Task />
        </Tasks>
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
