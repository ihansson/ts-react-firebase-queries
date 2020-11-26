import React from 'react'
import {Wrapper} from "../components/Grid";
import {Heading} from "../components/Elements";
import {LoginForm} from "../components/LoginForm";

export const LoginPage = () => (
    <Wrapper>
        <Heading>Sign in</Heading>
        <LoginForm />
    </Wrapper>
)