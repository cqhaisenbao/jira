import { ReactComponent as SoftwareLogo } from "../assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";
import styled from "@emotion/styled";
import { ButtonNoPadding, Row } from "./lib";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router";
import ProjectPopover from "./ProjectPopover";

const Header = styled(Row)`
  padding: 3.2rem;
  height: 6rem;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeadLeft = styled(Row)``;

const PageHeader = () => {
  const { logout, user } = useAuth();
  const push = useNavigate();
  return (
    <Header between={true}>
      <HeadLeft gap={true}>
        <SoftwareLogo
          onClick={() => push("/")}
          cursor={"pointer"}
          width={"18rem"}
          color={"reg(38,132,255)"}
        />
        <ProjectPopover />
        <ButtonNoPadding type={"link"}>用户</ButtonNoPadding>
      </HeadLeft>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key={"logout"}>
              <ButtonNoPadding type={"link"} onClick={logout}>
                退出
              </ButtonNoPadding>
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
