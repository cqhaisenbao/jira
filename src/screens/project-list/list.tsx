import React from "react";
import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/es/table/Table";
import { Link } from "react-router-dom";

interface Props extends TableProps<Project> {
  users: User[];
}

export const List: React.FC<Props> = ({ users, ...restProps }) => {
  const columns: ColumnsType<Project> = [
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
