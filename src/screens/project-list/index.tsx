import { SearchPanel } from "./search-panel";
import { List } from "./list";
import useDebounce from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useGetProjects } from "./hooks/useProjects";
import { useUsers } from "./hooks/useUsers";
import { useProjectsSearchParams } from "./hooks/useProjectsSearchParams";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const { data, loading } = useGetProjects(useDebounce(param, 1000));
  const { users } = useUsers();

  return (
    <Container>
      <Typography.Title level={2}>项目列表</Typography.Title>
      <SearchPanel param={param} setParam={setParam} />
      <List
        loading={loading}
        users={users?.result || []}
        dataSource={data?.result || []}
      />
    </Container>
  );
};

export default ProjectListScreen;
