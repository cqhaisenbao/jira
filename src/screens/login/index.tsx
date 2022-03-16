import React, { FormEvent } from "react";
import { Axios } from "../../utils";

const Login = () => {
  const handleSubmit = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    const res = await Axios("/login", "post", {
      username: (values.currentTarget.elements[0] as HTMLInputElement).value,
      password: (values.currentTarget.elements[1] as HTMLInputElement).value,
    });
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
