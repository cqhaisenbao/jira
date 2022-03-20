import { Divider, List, Popover, Typography } from "antd";
import { useGetProjects } from "../screens/project-list/hooks/useProjects";
import { ButtonNoPadding } from "./lib";
import { useProjectModal } from "../screens/project-list/hooks/useProjectsSearchParams";

const ProjectPopover = () => {
  const { open } = useProjectModal();
  const { data: projects } = useGetProjects();
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
      <ButtonNoPadding onClick={open} type={"link"}>
        创建项目
      </ButtonNoPadding>
    </div>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      项目
    </Popover>
  );
};

export default ProjectPopover;
