import React from "react";
import {Column, Wrapper, Grid} from "../components/Grid";
import {Button, Heading, Intro, Nav, NavItem} from "../components/Elements";
import {Project, Projects} from "../components/Projects";
import {Task, Tasks} from "../components/Tasks";
import {Field, Form, Input, Label} from "../components/Form";

export const Dashboard = () => (
    <Wrapper>
        <Grid>
            <Column>
                <Heading>Sidebar</Heading>
                <Nav>
                    <NavItem>Dashboard</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Account</NavItem>
                </Nav>
            </Column>
            <Column>

                {/* Dashboard screen */}
                <Heading>Dashboard</Heading>
                <Intro>Lorem ipsum dolor sit amet.</Intro>
                <Tasks>
                    <Task />
                </Tasks>
                {/* Dashboard screen */}

                {/* Projects screen */}
                <Heading>Projects</Heading>
                <Intro>Lorem ipsum dolor sit amet.</Intro>
                <Projects>
                    <Project />
                </Projects>
                {/* Projects screen */}

                {/* Account screen */}
                <Heading>Account</Heading>
                <Intro>Lorem ipsum dolor sit amet.</Intro>
                <Form>
                    <Field name="password">
                        <Label>Password</Label>
                        <Input type="password" />
                    </Field>
                    <Button>Update</Button>
                </Form>
                {/* Account screen */}

            </Column>
        </Grid>
    </Wrapper>
)