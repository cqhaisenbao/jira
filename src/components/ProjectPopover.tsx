import { Divider, List, Popover, Typography } from "antd";
import { useGetProjects } from "../screens/project-list/hooks/useProjects";
import { useDispatch } from "react-redux";
import { projectListActions } from "../screens/project-list/projectList.slice";
import { ButtonNoPadding } from "./lib";

const ProjectPopover = () => {
  const dispatch = useDispatch();
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
      <ButtonNoPadding
        type={"link"}
        onClick={() => dispatch(projectListActions.openProjectModal())}
      >
        创建项目
      </ButtonNoPadding>
    </div>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      <ButtonNoPadding type={"link"}>项目</ButtonNoPadding>
    </Popover>
  );
};

export default ProjectPopover;
