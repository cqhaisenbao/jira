import { SearchPanel } from "./components/search-panel";
import { List } from "./components/list";
import useDebounce from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { Space, Typography } from "antd";
import { useGetProjects } from "./hooks/useProjects";
import { useProjectsSearchParams } from "./hooks/useProjectsSearchParams";
import ProjectProvider from "./projectContext";

const Container = styled.div`
  padding: 3.2rem;
`;

interface Props {
  projectButton: JSX.Element;
}

const ProjectListScreen = (props: Props) => {
  const { projectButton } = props;
  const [param, setParam] = useProjectsSearchParams();
  const {
    data,
    loading,
    run: refreshList,
  } = useGetProjects(useDebounce(param, 1000));

  return (
    <ProjectProvider>
      <Container>
        <Space
          style={{
            width: "100%",
            marginBottom: "20px",
            justifyContent: "space-between",
          }}
        >
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            项目列表
          </Typography.Title>
          {projectButton}
        </Space>
        <SearchPanel param={param} setParam={setParam} />
        <List
          projectButton={projectButton}
          refresh={refreshList}
          loading={loading}
          dataSource={data?.result || []}
        />
      </Container>
    </ProjectProvider>
  );
};

export default ProjectListScreen;
