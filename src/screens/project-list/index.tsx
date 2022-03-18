import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "./hooks/useProjects";
import { useUsers } from "./hooks/useUsers";
import { useUrlQueryParam } from "../../utils/url";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const [, setParam] = useState<SearchParam>({
    name: "",
    personId: "",
  });
  const [param] = useUrlQueryParam(["name", "personId"]);
  const debounceValue = useDebounce(param, 1000);
  const { data, loading } = useProjects(debounceValue);
  const { users } = useUsers();

  return (
    <Container>
      <Typography.Title level={2}>项目列表</Typography.Title>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users?.result || []}
      />
      <List
        loading={loading}
        users={users?.result || []}
        dataSource={data?.result || []}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = true;

export default ProjectListScreen;
