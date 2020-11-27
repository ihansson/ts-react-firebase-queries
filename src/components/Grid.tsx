import React, { ReactNode } from "react";

export const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      width: "100%",
      maxWidth: "80em",
      background: "white",
      margin: "0 auto",
      boxShadow: "0 30px 40px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)",
      borderRadius: "4px",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

export const Grid = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      display: "flex",
    }}
  >
    {children}
  </div>
);

export const Column = ({
  children,
  width = "auto",
  withStyle = "is-default",
  spacing = "0",
}: {
  children?: ReactNode;
  width?: string;
  withStyle?: string;
  spacing?: string;
}) => (
  <div
    className={withStyle}
    style={{
      width,
      flexGrow: 1,
      marginRight: spacing + "em",
    }}
  >
    {children}
  </div>
);

export const Aligner = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {children}
  </div>
);

export const Top = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      width: "100%",
    }}
  >
    {children}
  </div>
);

export const Bottom = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      width: "100%",
      marginTop: "auto",
    }}
  >
    {children}
  </div>
);

export const Block = ({
  children,
  type = "major",
  withStyle = "is-default",
}: {
  children?: ReactNode;
  type?: string;
  withStyle?: string;
}) => (
  <div
    className={withStyle}
    style={{
      padding: type === "major" ? "5em" : "1.4em 1.6em",
    }}
  >
    {children}
  </div>
);

export const Space = ({ children }: { children?: ReactNode }) => (
  <div className="space">{children}</div>
);
