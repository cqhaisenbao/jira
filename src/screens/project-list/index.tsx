import { SearchPanel } from "./components/search-panel";
import { List } from "./components/list";
import useDebounce from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { Space, Typography } from "antd";
import { useGetProjects } from "./hooks/useProjects";
import {
  useProjectModal,
  useProjectsSearchParams,
} from "./hooks/useProjectsSearchParams";
import ProjectProvider from "./projectContext";
import { ButtonNoPadding } from "../../components/lib";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const { open } = useProjectModal();
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
          <ButtonNoPadding onClick={open} type={"link"}>
            创建项目
          </ButtonNoPadding>
        </Space>
        <SearchPanel param={param} setParam={setParam} />
        <List
          refresh={refreshList}
          loading={loading}
          dataSource={data?.result || []}
        />
      </Container>
    </ProjectProvider>
  );
};

export default ProjectListScreen;
