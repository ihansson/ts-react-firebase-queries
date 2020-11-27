import { Button, Heading, Intro } from "../Elements";
import { Field, Form, Input, Label } from "../Form";
import { Space } from "../Grid";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";

export const AccountScreen = () => (
  <Screen>
    <ScreenHeader>
      <Heading>Account</Heading>
      <Intro>Lorem ipsum dolor sit amet.</Intro>
    </ScreenHeader>
    <ScreenContent>
      <Form>
        <Space>
          <Field name="password">
            <Label>Password</Label>
            <Input type="password" />
          </Field>
          <Button>Update</Button>
        </Space>
      </Form>
    </ScreenContent>
  </Screen>
);
