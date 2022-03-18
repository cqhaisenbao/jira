import ProjectListScreen from "./screens/project-list";
import styled from "@emotion/styled";
import PageHeader from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import ProjectScreen from "./screens/project";

const Main = styled.main`
  height: calc(100vh - 7rem);
`;

export const AuthenticatedApp = () => {
  return (
    <>
      <PageHeader />
      <Main>
        {/*<Router>*/}
        <Routes>
          <Route path="/projects" element={<ProjectListScreen />} />
          <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          <Route path="/" element={<Navigate to="/projects" />} />
        </Routes>
        {/*</Router>*/}
      </Main>
    </>
  );
};
