import React, { ReactNode } from "react";

export const Form = ({
  children,
  onSubmit = () => null,
}: {
  children?: ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
}) => {
  let props: any = {};
  if (onSubmit) props.onSubmit = onSubmit;
  return <form {...props}>{children}</form>;
};

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
  defaultValue?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = "text",
  name = "",
  defaultValue = "",
  onChange = () => null,
}: InputOptions) => {
  let props: any = {
    name,
    type,
  };
  if (defaultValue) props.defaultValue = defaultValue;
  if (onChange) props.onChange = onChange;
  return <input {...props} />;
};

export interface SelectOptions {
  type: "user";
  name?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface SelectOption {
  value: string;
  text: string;
}

export const Select = ({
  type = "user",
  name = "",
  onChange = () => null,
}: SelectOptions) => {
  let options: Array<SelectOption> = [];
  if (type === "user") {
    options = [
      { value: "1", text: "User A" },
      { value: "2", text: "User B" },
    ];
  }
  let props: any = {};
  if (onChange) props.onChange = onChange;
  return (
    <select name={name} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};
