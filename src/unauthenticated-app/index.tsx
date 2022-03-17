import { useState } from "react";
import Register from "./register";
import Login from "./login";
import { Card, Divider, Typography } from "antd";
import styled from "@emotion/styled";
import logo from "../assets/logo.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Header = styled.header`
  background: url("${logo}") no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url("${left}"), url("${right}");
`;

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Typography.Title level={4}>
          {isRegister ? "请注册" : "请登录"}
        </Typography.Title>
        {isRegister ? <Register /> : <Login />}
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "直接登录" : "注册账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};
