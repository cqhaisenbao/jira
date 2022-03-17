import React from "react";
import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table/Table";

interface Props extends TableProps<Project> {
  users: User[];
}

export const List: React.FC<Props> = ({ users, ...restProps }) => {
  const columns: ColumnsType<Project> = [
    {
      dataIndex: "name",
      title: "名称",
    },
    {
      dataIndex: "organization",
      title: "部门",
    },
    {
      dataIndex: "personId",
      title: "负责人",
      render: (personId: string) => {
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
