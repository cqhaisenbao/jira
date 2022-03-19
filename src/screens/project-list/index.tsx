import { SearchPanel } from "./components/search-panel";
import { List } from "./components/list";
import useDebounce from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { Button, Space, Typography } from "antd";
import { useGetProjects } from "./hooks/useProjects";
import { useProjectsSearchParams } from "./hooks/useProjectsSearchParams";
import ProjectProvider from "./projectContext";
import { projectListActions } from "./projectList.slice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const dispatch = useDispatch();
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
          <Button
            style={{ padding: 0 }}
            type={"link"}
            onClick={() => dispatch(projectListActions.openProjectModal())}
          >
            创建项目
          </Button>
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
