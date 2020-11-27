import { useParams } from "react-router";
import { Button, Heading, Intro } from "../Elements";
import { Task, Tasks } from "../Tasks";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label } from "../Form";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";

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
          style={{ marginTop: "2.5em", width: "20em" }}
        >
          <Block type="minor">
            <Heading type="minor">Add Task</Heading>
            <Form>
              <Space>
                <Field name="name">
                  <Label>Task Description</Label>
                  <Input type="text" />
                </Field>
                <Button>Create</Button>
              </Space>
            </Form>
          </Block>
        </div>
      </ScreenContent>
    </Screen>
  );
};
