import { Drawer, Button } from "antd";

interface Props {
  projectModalVisible: boolean;
  onClose: () => void;
}

const ProjectModal = (props: Props) => {
  const { projectModalVisible, onClose } = props;

  return (
    <Drawer onClose={onClose} visible={projectModalVisible} width={"100%"}>
      <div>Project Modal</div>
      <Button onClick={onClose}>关闭</Button>
    </Drawer>
  );
};

export default ProjectModal;
