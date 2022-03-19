import { useHttp } from "../../../utils/http";
import { useRequest } from "ahooks";

export const useUsers = () => {
  const client = useHttp();
  const { data: users } = useRequest<{ result: User[] }, any>(() => {
    return client("users");
  });

  return {
    users: users?.result || [],
  };
};
