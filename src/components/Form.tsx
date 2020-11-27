import React, { ReactNode } from "react";

export const Form = ({ children }: { children?: ReactNode }) => (
  <form>{children}</form>
);

export interface FieldOptions {
  children?: ReactNode;
  name: string;
}

export const Field = ({ children, name }: FieldOptions) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, { name });
      })}
    </div>
  );
};

export interface LabelOptions {
  children?: ReactNode;
  name?: string;
}

export const Label = ({ children, name = "" }: LabelOptions) => (
  <label htmlFor={name}>{children}</label>
);

export interface InputOptions {
  type: "text" | "email" | "password" | "date";
  name?: string;
}

export const Input = ({ type = "text", name = "" }: InputOptions) => {
  return <input name={name} type={type} />;
};

export interface SelectOptions {
  type: "user";
  name?: string;
}

export interface SelectOption {
  value: string;
  text: string;
}

export const Select = ({ type = "user", name = "" }: SelectOptions) => {
  let options: Array<SelectOption> = [];
  if (type === "user") {
    options = [
      { value: "1", text: "User A" },
      { value: "2", text: "User B" },
    ];
  }
  return (
    <select name={name}>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};
