import React, {ReactNode} from "react";
import {Button, Heading, Intro} from "./Elements";
import {Project, Projects} from "./Projects";
import {Task, Tasks} from "./Tasks";
import {Field, Form, Input, Label} from "./Form";
import {Block, Space} from "./Grid";
import {useParams} from "react-router";

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
                <Task/>
                <Task/>
            </Tasks>
        </ScreenContent>
    </Screen>
)

export const ProjectScreen = () => {
    const {id}: { id: string } = useParams();

    return <Screen>
        <ScreenHeader>
            <Heading>Project: {id}</Heading>
            <Intro>Lorem ipsum dolor sit amet.</Intro>
        </ScreenHeader>
        <ScreenContent>
            <Tasks>
                <Task/>
                <Task/>
                <Task/>
            </Tasks>
            <div className="is-muted-alt" style={{marginTop: "2.5em", width: "20em"}}>
                <Block type="minor">
                    <Heading type="minor">Add Task</Heading>
                    <Form>
                        <Space>
                            <Field name="name">
                                <Label>Task Description</Label>
                                <Input type="text"/>
                            </Field>
                            <Button>Create</Button>
                        </Space>
                    </Form>
                </Block>
            </div>
        </ScreenContent>
    </Screen>
}

export const ProjectsScreen = () => (
    <Screen>
        <ScreenHeader>
            <Heading>Projects</Heading>
            <Intro>Lorem ipsum dolor sit amet.</Intro>
        </ScreenHeader>
        <ScreenContent>
            <Projects>
                <Project/>
                <Project/>
            </Projects>
            <div className="is-muted-alt" style={{marginTop: "2.5em", width: "20em"}}>
                <Block type="minor">
                    <Heading type="minor">Add Project</Heading>
                    <Form>
                        <Space>
                            <Field name="name">
                                <Label>Project Name</Label>
                                <Input type="text"/>
                            </Field>
                            <Button>Create</Button>
                        </Space>
                    </Form>
                </Block>
            </div>
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
                <Space>
                    <Field name="password">
                        <Label>Password</Label>
                        <Input type="password"/>
                    </Field>
                    <Button>Update</Button>
                </Space>
            </Form>
        </ScreenContent>
    </Screen>
)