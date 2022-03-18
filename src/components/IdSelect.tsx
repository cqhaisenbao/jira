import { Select } from "antd";
import React from "react";

type SelectProps = React.ComponentProps<typeof Select>;

interface Props extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: string | number | undefined | null;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options: {
    id: number;
    name: string;
  }[];
}

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));

const IdSelect = (props: Props) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;

  return (
    <Select
      value={toNumber(value)}
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...restProps}
    >
      {defaultOptionName && (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      )}
      {options.map(({ id, name }) => (
        <Select.Option key={id} value={id}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default IdSelect;
