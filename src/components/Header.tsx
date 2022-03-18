import { ReactComponent as SoftwareLogo } from "../assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import styled from "@emotion/styled";
import { Row } from "./lib";
import { useAuth } from "../context/auth-context";

const Header = styled(Row)`
  padding: 3.2rem;
  height: 6rem;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeadLeft = styled(Row)``;

const PageHeader = () => {
  const { logout, user } = useAuth();

  return (
    <Header between={true}>
      <HeadLeft gap={true}>
        <SoftwareLogo width={"18rem"} color={"reg(38,132,255)"} />
        <h3>项目</h3>
        <h3>用户</h3>
      </HeadLeft>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key={"logout"}>
              <Button type={"link"} onClick={logout}>
                退出
              </Button>
            </Menu.Item>
          </Menu>
        }
      >
        <a onClick={(e) => e.preventDefault()}>Hi，{user?.name}</a>
      </Dropdown>
    </Header>
  );
};

export default PageHeader;
