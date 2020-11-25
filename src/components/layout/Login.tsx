import React, {ReactNode} from 'react'

// Grid
const Wrapper = ({children}: { children?: ReactNode }) => <div>{children}</div>

// Type
const Heading = ({children}: { children?: ReactNode }) => <h1>{children}</h1>

// Form
const Form = ({children}: { children?: ReactNode }) => <form>{children}</form>

interface FieldOptions {
    children?: ReactNode;
    name: string;
}
const Field = ({children, name}: FieldOptions) => {
    return (<div>{React.Children.map(children, child  => {
        return React.cloneElement(child as React.ReactElement<any>, {name})
    })}</div>)
}

interface LabelOptions {
    children?: ReactNode;
    name?: string;
}
const Label = ({children, name = ""}: LabelOptions) => <label htmlFor={name}>{children}</label>

interface InputOptions {
    type: "text" | "email" | "password";
    name?: string;
}
const Input = ({type = "text", name = ""}: InputOptions) => {

    return (<input name={name} type={type} />)
}

export const LoginPage = () => {

    return (
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
            </Form>
        </Wrapper>
    )
}