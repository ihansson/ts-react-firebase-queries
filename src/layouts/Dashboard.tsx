import React from "react";
import {
  Aligner,
  Block,
  Bottom,
  Column,
  Grid,
  Top,
  Wrapper,
} from "../components/Grid";
import { Copyright, Heading, Large } from "../components/Elements";
import { Nav, NavItem } from "../components/Nav";
import { Route, Switch } from "react-router";
import { HomeScreen } from "../components/screens/HomeScreen";
import { AccountScreen } from "../components/screens/AccountScreen";
import { ProjectsScreen } from "../components/screens/ProjectsScreen";
import { ProjectScreen } from "../components/screens/ProjectScreen";
import { UsersScreen } from "../components/screens/UsersScreen";

export const Dashboard = () => (
  <Wrapper>
    <Grid>
      <Column withStyle="is-muted" width="22%">
        <Block>
          <Heading>PM</Heading>
          <Large>
            <Nav>
              <NavItem to="/dashboard">Dashboard</NavItem>
              <NavItem to="/dashboard/projects">Projects</NavItem>
              <NavItem to="/dashboard/users">Users</NavItem>
              <NavItem to="/dashboard/account">Account</NavItem>
            </Nav>
            <NavItem to="/logout" withStyle="is-warning">
              Logout
            </NavItem>
          </Large>
        </Block>
      </Column>
      <Column withStyle="has-shadow" width="78%">
        <Aligner>
          <Top>
            <Block>
              <Switch>
                <Route path="/dashboard/users">
                  <UsersScreen />
                </Route>
                <Route path="/dashboard/account">
                  <AccountScreen />
                </Route>
                <Route path="/dashboard/projects/:id">
                  <ProjectScreen />
                </Route>
                <Route path="/dashboard/projects">
                  <ProjectsScreen />
                </Route>
                <Route path="/dashboard">
                  <HomeScreen />
                </Route>
              </Switch>
            </Block>
          </Top>
          <Bottom>
            <Block>
              <Copyright />
            </Block>
          </Bottom>
        </Aligner>
      </Column>
    </Grid>
  </Wrapper>
);
