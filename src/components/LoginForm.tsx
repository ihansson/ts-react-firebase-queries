import React from "react";
import {Button} from "./Elements";
import {Field, Form, Input, Label} from "./Form";

export const LoginForm = () => {
    return (
        <Form>
            <Field name="email">
                <Label>Email Address</Label>
                <Input type="email"/>
            </Field>
            <Field name="password">
                <Label>Password</Label>
                <Input type="password"/>
            </Field>
            <Button>Sign in</Button>
        </Form>
    )
}