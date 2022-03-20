import { Drawer, Button } from "antd";
import { useProjectModal } from "../hooks/useProjectsSearchParams";

const ProjectModal = () => {
  const { projectModalOpen, close } = useProjectModal();
  return (
    <Drawer onClose={close} visible={projectModalOpen} width={"100%"}>
      <div>Project Modal</div>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
