import { useUsers } from "../screens/project-list/hooks/useUsers";
import IdSelect from "./IdSelect";
import React from "react";

export const UserSelect = (
  props: Omit<React.ComponentProps<typeof IdSelect>, "options">
) => {
  const { users } = useUsers();
  return <IdSelect options={users?.result || []} {...props} />;
};
