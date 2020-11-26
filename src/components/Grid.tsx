import React, {ReactNode} from "react";

export const Wrapper = ({children}: { children?: ReactNode }) => (
    <div style={{
        width: "100%",
        maxWidth: "80em",
        background: "white",
        boxShadow: "0 30px 40px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "4px"
    }}>{children}</div>
)

export const Grid = ({children}: { children?: ReactNode }) => (
    <div style={{
        display: "flex"
    }}>{children}</div>
)

export const Column = ({children, width = "auto"}: { children?: ReactNode, width?: string }) => (
    <div style={{
        width,
        flexGrow: 1
    }}>{children}</div>
)

export const Aligner = ({children}: { children?: ReactNode }) => (
    <div style={{
        height: "100%",
        display: "flex",
        flexDirection: "column"
    }}>{children}</div>
)

export const Top = ({children}: { children?: ReactNode }) => (
    <div style={{
        width: "100%",
    }}>{children}</div>
)

export const Bottom = ({children}: { children?: ReactNode }) => (
    <div style={{
        width: "100%",
        marginTop: "auto"
    }}>{children}</div>
)

export const Block = ({children}: { children?: ReactNode }) => (
    <div style={{
        padding: "5em"
    }}>{children}</div>
)

export const Space = ({children}: { children?: ReactNode }) => (
    <div className="space">{children}</div>
)