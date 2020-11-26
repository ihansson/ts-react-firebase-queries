import React from "react";
import {Column, Grid, Wrapper} from "../components/Grid";
import {Heading} from "../components/Elements";
import {Nav, NavItem} from "../components/Nav";
import {AccountScreen, HomeScreen, ProjectsScreen} from "../components/Screen";
import {Route, Switch} from "react-router";

export const Dashboard = () => (
    <Wrapper>
        <Grid>
            <Column>
                <Heading>Sidebar</Heading>
                <Nav>
                    <NavItem to="/dashboard">Dashboard</NavItem>
                    <NavItem to="/dashboard/projects">Projects</NavItem>
                    <NavItem to="/dashboard/account">Account</NavItem>
                    <NavItem to="/logout">Logout</NavItem>
                </Nav>
            </Column>
            <Column>
                <Switch>
                    <Route path="/dashboard/account">
                        <AccountScreen/>
                    </Route>
                    <Route path="/dashboard/projects">
                        <ProjectsScreen/>
                    </Route>
                    <Route path="/dashboard">
                        <HomeScreen/>
                    </Route>
                </Switch>
            </Column>
        </Grid>
    </Wrapper>
)