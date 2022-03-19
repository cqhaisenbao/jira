import { Rate } from "antd";
import React from "react";

interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Pin = (props: PinProps) => {
  const { checked, onCheckedChange, ...rest } = props;
  return (
    <Rate
      {...rest}
      count={1}
      onChange={(e) => (onCheckedChange ? onCheckedChange(e === 1) : null)}
      value={checked ? 1 : 0}
    />
  );
};

export default Pin;
