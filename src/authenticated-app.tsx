import ProjectListScreen from "./screens/project-list";
import styled from "@emotion/styled";
import PageHeader from "./components/Header";

const Main = styled.main`
  height: calc(100vh - 7rem);
`;

export const AuthenticatedApp = () => {
  return (
    <>
      <PageHeader />
      <Main>
        <ProjectListScreen />
      </Main>
    </>
  );
};
