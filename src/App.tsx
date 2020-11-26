import React from 'react';
import {LoginPage} from "./layouts/LoginPage";
import {Dashboard} from "./layouts/Dashboard";
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/">
                    <LoginPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
