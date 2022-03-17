import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input } from "antd";

const Login = () => {
  const { user, login } = useAuth();
  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    const res = await login(values);
    console.log(res);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="用户名"
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input type="text" id="username" />
      </Form.Item>
      <Form.Item
        label="密码"
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" id="password" />
      </Form.Item>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </div>
    </Form>
  );
};

export default Login;
