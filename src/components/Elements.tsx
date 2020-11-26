import React, {ReactNode} from "react";

export const Heading = ({children}: { children?: ReactNode }) => <h1>{children}</h1>
export const Intro = ({children}: { children?: ReactNode }) => <p>{children}</p>

export const Button = ({children}: { children?: ReactNode }) => <button>{children}</button>
