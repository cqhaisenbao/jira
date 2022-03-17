import { useHttp } from "../../../utils/http";
import { useRequest } from "ahooks";

export const useUsers = () => {
  const client = useHttp();
  const { data: users } = useRequest(() => {
    return client("users");
  });

  return {
    users,
  };
};
