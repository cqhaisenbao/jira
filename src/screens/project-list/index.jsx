import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import axios from "../../axios";

const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    axios("/projects").then((res) => {
      setList(res.data);
    });
  }, [param]);

  useEffect(() => {
    axios("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectListScreen;
