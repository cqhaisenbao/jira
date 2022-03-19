import React from "react";
import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table/Table";
import { Link } from "react-router-dom";
import Pin from "../../components/Pin";
import { useEditProject } from "./hooks/useProjects";

interface Props extends TableProps<Project> {
  users: User[] | [];
  refresh: (params: Partial<Project>) => void;
}

export const List: React.FC<Props> = ({ users, refresh, ...restProps }) => {
  const { editProject } = useEditProject();

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
        const user = users?.find((user) => user.id === personId);
        return user ? user.name : "";
      },
    },
    {
      dataIndex: "created",
      title: "创建时间",
    },
  ];

  return (
    <Table rowKey="id" pagination={false} columns={columns} {...restProps} />
  );
};
