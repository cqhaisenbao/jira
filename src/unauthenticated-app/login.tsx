import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

const Login = () => {
  const { user, login } = useAuth();
  const handleSubmit = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    const params = {
      username: (values.currentTarget.elements[0] as HTMLInputElement).value,
      password: (values.currentTarget.elements[1] as HTMLInputElement).value,
    };
    const res = await login(params);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};

export default Login;