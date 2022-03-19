import ProjectListScreen from "./screens/project-list";
import styled from "@emotion/styled";
import PageHeader from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import ProjectScreen from "./screens/project";
import ProjectModal from "./screens/project-list/components/ProjectModal";
import { useState } from "react";

const Main = styled.main`
  height: calc(100vh - 7rem);
`;

export const AuthenticatedApp = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <>
      <PageHeader openProjectModal={() => setProjectModalOpen(true)} />
      <Main>
        <Routes>
          <Route
            path="/projects"
            element={
              <ProjectListScreen
                openProjectModal={() => setProjectModalOpen(true)}
              />
            }
          />
          <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          <Route path="/" element={<Navigate to="/projects" />} />
        </Routes>
        <ProjectModal
          projectModalVisible={projectModalOpen}
          onClose={() => setProjectModalOpen(false)}
        />
      </Main>
    </>
  );
};
