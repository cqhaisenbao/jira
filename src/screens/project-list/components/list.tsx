import React, { useContext } from "react";
import { Button, Dropdown, Menu, Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table/Table";
import { Link } from "react-router-dom";
import Pin from "../../../components/Pin";
import { useEditProject } from "../hooks/useProjects";
import { ProjectContext } from "../projectContext";
import { ButtonNoPadding } from "../../../components/lib";

interface Props extends TableProps<Project> {
  refresh: (params: Partial<Project>) => void;
  openProjectModal: () => void;
}

export const List: React.FC<Props> = ({
  refresh,
  openProjectModal,
  ...restProps
}) => {
  const { editProject } = useEditProject();
  const ctx = useContext(ProjectContext);

  const pinProject = (id: number) => (pin: boolean) =>
    editProject({ id, pin }).then(refresh);

  const columns: ColumnsType<Project> = [
    {
      title: <Pin checked={true} disabled={true} />,
      render: (text, record) => (
        <Pin checked={record.pin} onCheckedChange={pinProject(record.id)} />
      ),
    },
    {
      title: "名称",
      render: (text, record) => (
        <Link to={record.id.toString()}>{record.name}</Link>
      ),
    },
    {
      dataIndex: "organization",
      title: "部门",
    },
    {
      dataIndex: "personId",
      title: "负责人",
      render: (personId: number) => {
        const user = ctx?.users?.find((user) => user.id === personId);
        return user ? user.name : "";
      },
    },
    {
      dataIndex: "created",
      title: "创建时间",
    },
    {
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"edit"}>
                <ButtonNoPadding type={"link"} onClick={openProjectModal}>
                  编辑
                </ButtonNoPadding>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={"link"}>...</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table rowKey="id" pagination={false} columns={columns} {...restProps} />
  );
};
