import { Button, Divider, List, Popover, Typography } from "antd";
import { useGetProjects } from "../screens/project-list/hooks/useProjects";

interface Props {
  openProjectModal: () => void;
}

const ProjectPopover = (props: Props) => {
  const { openProjectModal } = props;
  const { data: projects, loading } = useGetProjects();
  const pinnedProjects = projects?.result?.filter((project) => project.pin);
  const content = (
    <div style={{ minWidth: "30rem" }}>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item key={project.id}>
            <List.Item.Meta title={project.name} />
          </List.Item>
        ))}
      </List>
      <Divider style={{ paddingTop: 0, marginTop: 0 }} />
      <Button style={{ padding: 0 }} type={"link"} onClick={openProjectModal}>
        创建项目
      </Button>
    </div>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      项目
    </Popover>
  );
};

export default ProjectPopover;
