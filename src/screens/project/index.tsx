import { Link } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import KanbanScreen from "../kanban";
import EpicScreen from "../epic";

const ProjectScreen = () => {
  return (
    <div>
      <h1>Project Screen</h1>
      {/*如果是/kanban就会跳到根路由*/}
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="/kanban" element={<KanbanScreen />} />
        <Route path="/epic" element={<EpicScreen />} />
        <Route
          path="*"
          element={<Navigate to={window.location.pathname + `/kanban`} />}
        />
      </Routes>
    </div>
  );
};

export default ProjectScreen;
