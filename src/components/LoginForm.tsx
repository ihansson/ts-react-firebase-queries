import React, { SetStateAction, useState } from "react";
import { Space } from "./Grid";
import { Button } from "./Elements";
import { Field, Form, Input, Label } from "./Form";
import { useLogin } from "../api/auth";
import { useHistory } from "react-router";

export const LoginForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, success, error, handleLogin } = useLogin(email, password);

  function afterLogin() {
    setTimeout(() => history.push("/dashboard"), 500);
  }

  return (
    <Form onSubmit={handleLogin}>
      <Space>
        <Field name="email">
          <Label>Email Address</Label>
          <Input
            type="email"
            defaultValue={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Field name="password">
          <Label>Password</Label>
          <Input
            type="password"
            defaultValue={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value as SetStateAction<any>)
            }
          />
        </Field>
        <Button>Sign in</Button>
        <div>
          {loading && <div>LOADING</div>}
          {success && (
            <div>
              Logging In
              {afterLogin()}
            </div>
          )}
          {error && <div className="is-warning">{error}</div>}
        </div>
      </Space>
    </Form>
  );
};
