import React, {ReactNode} from "react";
import {Block, Column, Grid} from "./Grid";
import {Heading} from "./Elements";
import {Link} from "react-router-dom";

export const Tasks = ({children}: { children?: ReactNode }) => (
    <div>
        <h3 style={{marginBottom: "1em"}}>You have {React.Children.count(children)} tasks due.</h3>
        <Grid>
            {children}
        </Grid>
    </div>
)
export const Task = () => (
    <Column withStyle="is-muted-alt" spacing="1">
        <Block type="minor">
            <Heading type="minor">Task</Heading>
            <Link to="/projects">View project</Link>
        </Block>
    </Column>
)