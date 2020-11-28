import { Heading, Intro } from "../Elements";
import { Tasks } from "../Tasks";
import React from "react";
import { Screen, ScreenContent, ScreenHeader } from "./Screen";
import { Task, useGetTasks } from "../../api/data";

export const HomeScreen = () => {
  const [tasksError, tasksLoading, tasks]: [
    string,
    boolean,
    Array<Task>
  ] = useGetTasks("");

  return (
    <Screen>
      <ScreenHeader>
        <Heading>Dashboard</Heading>
        <Intro>Lorem ipsum dolor sit amet.</Intro>
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
      </ScreenContent>
    </Screen>
  );
};
