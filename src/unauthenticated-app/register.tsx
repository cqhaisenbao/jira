import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input } from "antd";

const { Item } = Form;

const Register = () => {
  const { user, register } = useAuth();
  const handleSubmit = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    const params = {
      username: (values.currentTarget.elements[0] as HTMLInputElement).value,
      password: (values.currentTarget.elements[1] as HTMLInputElement).value,
    };
    const res = await register(params);
    console.log(res);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Item name="username" label="用户名" rules={[{ required: true }]}>
        <Input type="text" />
      </Item>
      <Item name="password" label="密码" rules={[{ required: true }]}>
        <Input type="password" />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Item>
    </Form>
  );
};

export default Register;
