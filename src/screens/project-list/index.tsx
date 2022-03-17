import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState } from "react";
import { useRequest } from "ahooks";
import useDebounce from "../../hooks/useDebounce";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const [param, setParam] = useState<SearchParam>({
    name: "",
    personId: "",
  });
  const client = useHttp();
  const debounceValue = useDebounce(param, 1000);
  const { data, loading } = useRequest(
    () => {
      return client("projects", {
        data: debounceValue,
      });
    },
    {
      refreshDeps: [debounceValue],
    }
  );
  const { data: users } = useRequest(() => {
    return client("users");
  });

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
        dataSource={data?.result}
      />
    </Container>
  );
};

export default ProjectListScreen;
