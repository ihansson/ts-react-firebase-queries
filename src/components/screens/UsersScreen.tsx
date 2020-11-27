import { Button, Heading, Intro } from "../Elements";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";
import { User, Users } from "../Users";
import { Block, Space } from "../Grid";
import { Field, Form, Input, Label } from "../Form";

export const UsersScreen = () => (
  <Screen>
    <ScreenHeader>
      <Heading>Projects</Heading>
      <Intro>Lorem ipsum dolor sit amet.</Intro>
    </ScreenHeader>
    <ScreenContent>
      <Users>
        <User />
      </Users>
      <div
        className="is-muted-alt"
        style={{ marginTop: "2.5em", width: "20em" }}
      >
        <Block type="minor">
          <Heading type="minor">Add User</Heading>
          <Form>
            <Space>
              <Field name="name">
                <Label>User Email</Label>
                <Input type="text" />
              </Field>
              <Field name="name">
                <Label>Password</Label>
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
