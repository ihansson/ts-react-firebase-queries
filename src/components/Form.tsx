import React, {ReactNode} from "react";

export const Form = ({children}: { children?: ReactNode }) => <form>{children}</form>

export interface FieldOptions {
    children?: ReactNode;
    name: string;
}

export const Field = ({children, name}: FieldOptions) => {
    return (<div>{React.Children.map(children, child => {
        return React.cloneElement(child as React.ReactElement<any>, {name})
    })}</div>)
}

export interface LabelOptions {
    children?: ReactNode;
    name?: string;
}

export const Label = ({children, name = ""}: LabelOptions) => <label htmlFor={name}>{children}</label>

export interface InputOptions {
    type: "text" | "email" | "password";
    name?: string;
}

export const Input = ({type = "text", name = ""}: InputOptions) => {
    return (<input name={name} type={type}/>)
}