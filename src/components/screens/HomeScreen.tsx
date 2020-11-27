import { Heading, Intro } from "../Elements";
import { Task, Tasks } from "../Tasks";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";

export const HomeScreen = () => (
  <Screen>
    <ScreenHeader>
      <Heading>Dashboard</Heading>
      <Intro>Lorem ipsum dolor sit amet.</Intro>
    </ScreenHeader>
    <ScreenContent>
      <Tasks>
        <Task />
        <Task />
        <Task />
      </Tasks>
    </ScreenContent>
  </Screen>
);
