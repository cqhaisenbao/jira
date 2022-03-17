import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { useMount } from "ahooks";
import useDebounce from "../../hooks/useDebounce";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";

const Container = styled.div`
  padding: 3.2rem;
`;

const ProjectListScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [param, setParam] = useState<SearchParam>({
    name: "",
    personId: "",
  });
  const [list, setList] = useState<Project[]>([]);
  const client = useHttp();

  const debounceValue = useDebounce(param, 1000);

  useEffect(() => {
    client("projects", {
      data: debounceValue,
    }).then((res) => setList(res.result));
  }, [debounceValue]);

  useMount(() => {
    client("users").then((res) => setUsers(res.result));
  });

  return (
    <Container>
      <Typography.Title level={2}>项目列表</Typography.Title>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </Container>
  );
};

export default ProjectListScreen;
