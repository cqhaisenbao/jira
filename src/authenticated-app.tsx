import ProjectListScreen from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";

const Header = styled(Row)`
  padding: 0 2rem;
  height: 6rem;
  border: 1px solid red;
`;

const HeadLeft = styled(Row)``;

const Main = styled.main`
  height: calc(100vh - 8rem);
`;

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <>
      <Header between={true} marginBottom={2}>
        <HeadLeft gap={true}>
          <h3>LOGO</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeadLeft>
        <button onClick={logout}>登出</button>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </>
  );
};
