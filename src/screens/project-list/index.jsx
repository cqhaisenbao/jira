import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("").then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        setList(data);
      }
    });
  }, [param]);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} />
      <List list={list} />
    </div>
  );
};
