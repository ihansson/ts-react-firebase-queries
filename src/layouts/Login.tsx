import React from 'react'
import {Wrapper} from "../components/Grid";
import {Heading, Button} from "../components/Elements";
import {Form, Field, Label, Input} from "../components/Form";

export const LoginPage = () => (
    <Wrapper>
        <Heading>Sign in</Heading>
        <Form>
            <Field name="email">
                <Label>Email Address</Label>
                <Input type="email" />
            </Field>
            <Field name="password">
                <Label>Password</Label>
                <Input type="password" />
            </Field>
            <Button>Sign in</Button>
        </Form>
    </Wrapper>
)