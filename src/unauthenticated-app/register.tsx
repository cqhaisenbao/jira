import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input } from "antd";

const { Item } = Form;

const Register = () => {
  const { register } = useAuth();
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
      <Item name="username" rules={[{ required: true }]}>
        <Input type="text" placeholder={"请输入用户名"} />
      </Item>
      <Item name="password" rules={[{ required: true }]}>
        <Input placeholder={"请输入密码"} type="password" />
      </Item>
      <Item>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          注册
        </Button>
      </Item>
    </Form>
  );
};

export default Register;
