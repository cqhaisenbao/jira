import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { useMount } from "ahooks";
import useDebounce from "../../hooks/useDebounce";
import { useHttp } from "../../utils/http";

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
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
