import { useState } from "react";
import Register from "./register";
import Login from "./login";
import { Button, Card } from "antd";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? <Register /> : <Login />}
        <Button onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? "登录" : "注册"}
        </Button>
      </Card>
    </div>
  );
};
