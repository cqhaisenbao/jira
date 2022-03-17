import React from "react";
import { Input, Select, Space } from "antd";

interface Props {
  param: SearchParam;
  setParam: (param: SearchParam) => void;
  users: User[];
}

export const SearchPanel: React.FC<Props> = ({ param, setParam, users }) => {
  return (
    <Space style={{ marginBottom: "2rem" }}>
      <Input
        value={param.name}
        onChange={(e) => setParam({ ...param, name: e.target.value })}
      />
      <Select
        value={param.personId}
        onChange={(e) => setParam({ ...param, personId: e })}
      >
        <Select.Option value="">负责人</Select.Option>
        {users.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </Space>
  );
};
