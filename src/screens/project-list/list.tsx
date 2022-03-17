import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table/Table";

interface Props {
  list: Project[];
  users: User[];
}

export const List: React.FC<Props> = ({ list, users }) => {
  const columns: ColumnsType<Project> = [
    {
      dataIndex: "name",
      title: "名称",
    },
    {
      dataIndex: "personId",
      title: "负责人",
      render: (personId: string) => {
        const user = users.find((user) => user.id === personId);
        return user ? user.name : "";
      },
    },
  ];

  return <Table pagination={false} columns={columns} dataSource={list} />;
};
