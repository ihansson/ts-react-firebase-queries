import { Button, Heading, Intro } from "../Elements";
import { Project, Projects } from "../Projects";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label } from "../Form";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";

export const ProjectsScreen = () => (
  <Screen>
    <ScreenHeader>
      <Heading>Projects</Heading>
      <Intro>Lorem ipsum dolor sit amet.</Intro>
    </ScreenHeader>
    <ScreenContent>
      <Projects>
        <Project />
        <Project />
      </Projects>
      <div
        className="is-muted-alt"
        style={{ marginTop: "2.5em", width: "20em" }}
      >
        <Block type="minor">
          <Heading type="minor">Add Project</Heading>
          <Form>
            <Space>
              <Field name="name">
                <Label>Project Name</Label>
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
