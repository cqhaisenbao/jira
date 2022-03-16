import qs from "qs";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { Axios, cleanObject } from "../../utils";
import { useMount } from "ahooks";
import useDebounce from "../../hooks/useDebounce";

const ProjectListScreen = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [param, setParam] = useState<SearchParam>({
    name: "",
    personId: "",
  });
  const [list, setList] = useState<Project[]>([]);

  const debounceValue = useDebounce(param, 1000);

  useEffect(() => {
    Axios<Project[]>(
      `/projects?${qs.stringify(cleanObject(debounceValue))}`
    ).then((res) => setList(res));
  }, [debounceValue]);

  useMount(() => Axios<User[]>("/users").then((res) => setUsers(res)));

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
