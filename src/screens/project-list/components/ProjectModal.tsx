import { Drawer, Button } from "antd";
import {
  projectListActions,
  selectProjectModalOpen,
} from "../projectList.slice";
import { useDispatch, useSelector } from "react-redux";

const ProjectModal = () => {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);

  return (
    <Drawer
      onClose={() => dispatch(projectListActions.closeProjectModal())}
      visible={projectModalOpen}
      width={"100%"}
    >
      <div>Project Modal</div>
      <Button onClick={() => dispatch(projectListActions.closeProjectModal())}>
        关闭
      </Button>
    </Drawer>
  );
};

export default ProjectModal;
