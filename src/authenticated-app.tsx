import ProjectListScreen from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";

const Header = styled(Row)`
  padding: 3.2rem;
  height: 6rem;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeadLeft = styled(Row)``;

const Main = styled.main`
  height: calc(100vh - 7rem);
`;

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <>
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
      <Main>
        <ProjectListScreen />
      </Main>
    </>
  );
};
