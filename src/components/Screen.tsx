import React, {ReactNode} from "react";
import {Button, Heading, Intro} from "./Elements";
import {Project, Projects} from "./Projects";
import {Task, Tasks} from "./Tasks";
import {Field, Form, Input, Label} from "./Form";

export const Screen = ({children}: { children?: ReactNode }) => (
    <div>{children}</div>
)

export const ScreenContent = ({children}: { children?: ReactNode }) => (
    <div>{children}</div>
)

export const ScreenHeader = ({children}: { children?: ReactNode }) => (
    <div>{children}</div>
)

export const HomeScreen = () => (
    <Screen>
        <ScreenHeader>
            <Heading>Dashboard</Heading>
            <Intro>Lorem ipsum dolor sit amet.</Intro>
        </ScreenHeader>
        <ScreenContent>
            <Tasks>
                <Task/>
            </Tasks>
        </ScreenContent>
    </Screen>
)

export const ProjectsScreen = () => (
    <Screen>
        <ScreenHeader>
            <Heading>Projects</Heading>
            <Intro>Lorem ipsum dolor sit amet.</Intro>
        </ScreenHeader>
        <ScreenContent>
            <Projects>
                <Project/>
            </Projects>
        </ScreenContent>
    </Screen>
);

export const AccountScreen = () => (
    <Screen>
        <ScreenHeader>
            <Heading>Account</Heading>
            <Intro>Lorem ipsum dolor sit amet.</Intro>
        </ScreenHeader>
        <ScreenContent>
            <Form>
                <Field name="password">
                    <Label>Password</Label>
                    <Input type="password"/>
                </Field>
                <Button>Update</Button>
            </Form>
        </ScreenContent>
    </Screen>
)