import React from "react";
import {Column, Grid, Wrapper} from "../components/Grid";
import {Heading, Nav, NavItem} from "../components/Elements";
import {AccountScreen, HomeScreen, ProjectsScreen} from "../components/Screen";

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
                <HomeScreen/>
                <ProjectsScreen/>
                <AccountScreen/>
            </Column>
        </Grid>
    </Wrapper>
)