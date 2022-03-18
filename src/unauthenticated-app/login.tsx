import React from "react";
import { useAuth } from "../context/auth-context";
import { Button, Form, Input } from "antd";

const Login = () => {
  const { login } = useAuth();
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
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"请输入用户名"} type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"请输入密码"} type="password" id="password" />
      </Form.Item>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          登录
        </Button>
      </div>
    </Form>
  );
};

export default Login;
