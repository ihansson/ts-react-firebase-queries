import React from 'react'
import {Wrapper} from "../components/Grid";
import {Button, Heading} from "../components/Elements";
import {Field, Form, Input, Label} from "../components/Form";

export const LoginPage = () => (
    <Wrapper>
        <Heading>Sign in</Heading>
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
    </Wrapper>
)