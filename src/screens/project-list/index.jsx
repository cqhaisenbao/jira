import qs from "qs";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { Axios, cleanObject } from "../../utils";
import { useMount } from "ahooks";
import useDebounce from "../../hooks/useDebounce";

const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  const debounceValue = useDebounce(param, 1000);

  useEffect(() => {
    Axios(`/projects?${qs.stringify(cleanObject(param))}`).then((res) => {
      setList(res.data);
    });
  }, [debounceValue]);

  useMount(() => {
    Axios("/users").then((res) => {
      setUsers(res.data);
    });
  });

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
