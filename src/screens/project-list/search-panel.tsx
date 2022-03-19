import React from "react";
import { Input, Space } from "antd";
import { UserSelect } from "../../components/userSelect";

interface Props {
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: Props["param"]) => void;
}

export const SearchPanel: React.FC<Props> = ({ param, setParam }) => {
  return (
    <Space style={{ marginBottom: "2rem" }}>
      <Input
        value={param.name}
        onChange={(e) => setParam({ ...param, name: e.target.value })}
      />
      <UserSelect
        defaultOptionName={"负责人"}
        value={param.personId}
        onChange={(value) => setParam({ ...param, personId: value })}
      />
    </Space>
  );
};
