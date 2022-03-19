import ProjectListScreen from "./screens/project-list";
import styled from "@emotion/styled";
import PageHeader from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import ProjectScreen from "./screens/project";
import ProjectModal from "./screens/project-list/components/ProjectModal";
import { useState } from "react";
import { Button } from "antd";

const Main = styled.main`
  height: calc(100vh - 7rem);
`;

export const AuthenticatedApp = () => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const projectButton = (
    <Button
      style={{ padding: 0 }}
      type={"link"}
      onClick={() => setProjectModalOpen(true)}
    >
      创建项目
    </Button>
  );

  return (
    <>
      <PageHeader projectButton={projectButton} />
      <Main>
        <Routes>
          <Route
            path="/projects"
            element={<ProjectListScreen projectButton={projectButton} />}
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
