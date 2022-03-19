import { SearchPanel } from "./search-panel";
import { List } from "./list";
import useDebounce from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useGetProjects } from "./hooks/useProjects";
import { useProjectsSearchParams } from "./hooks/useProjectsSearchParams";
import ProjectProvider, { ProjectContext } from "./projectContext";
import { useContext } from "react";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const {
    data,
    loading,
    run: refreshList,
  } = useGetProjects(useDebounce(param, 1000));
  const ctx = useContext(ProjectContext);

  return (
    <ProjectProvider>
      <Container>
        <Typography.Title level={2}>项目列表</Typography.Title>
        <SearchPanel param={param} setParam={setParam} />
        <List
          refresh={refreshList}
          loading={loading}
          users={ctx?.users || []}
          dataSource={data?.result || []}
        />
      </Container>
    </ProjectProvider>
  );
};

export default ProjectListScreen;
