import React, {ReactNode} from "react";

export const Heading = ({children}: { children?: ReactNode }) => <h1>{children}</h1>
export const Intro = ({children}: { children?: ReactNode }) => <h2>{children}</h2>
export const Small = ({children}: { children?: ReactNode }) => <p className="text-small">{children}</p>

export const Button = ({children}: { children?: ReactNode }) => <button>{children}</button>

export const CoverImage = ({src, alt}: { src: string, alt: string }) => (
    <img style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }} src={src} alt={alt}/>
)