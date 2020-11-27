import React, { ReactNode } from "react";

export const Heading = ({
  children,
  type = "major",
}: {
  children?: ReactNode;
  type?: string;
}) => {
  if (type === "major") return <h1>{children}</h1>;
  return <h3>{children}</h3>;
};
export const Intro = ({ children }: { children?: ReactNode }) => (
  <h2>{children}</h2>
);
export const Large = ({ children }: { children?: ReactNode }) => (
  <span className="text-large">{children}</span>
);
export const Small = ({ children }: { children?: ReactNode }) => (
  <span className="text-small">{children}</span>
);

export const Button = ({ children }: { children?: ReactNode }) => (
  <button>{children}</button>
);

export const CoverImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
    src={src}
    alt={alt}
  />
);

export const Copyright = () => (
  <Small>
    © 2020 Lorem Ipsum Dolor.
    <br />
    All Rights Reserved.
  </Small>
);
