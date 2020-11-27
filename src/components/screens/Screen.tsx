import React, { ReactNode } from "react";

export const Screen = ({ children }: { children?: ReactNode }) => (
  <div>{children}</div>
);

export const ScreenContent = ({ children }: { children?: ReactNode }) => (
  <div>{children}</div>
);

export const ScreenHeader = ({ children }: { children?: ReactNode }) => (
  <div>{children}</div>
);
