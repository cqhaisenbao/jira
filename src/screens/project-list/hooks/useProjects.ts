import { useHttp } from "../../../utils/http";
import { useRequest } from "ahooks";

export const useProjects = (param: Partial<Project>) => {
  const client = useHttp();
  const { data, loading } = useRequest<GeneralResponse<Project[]>, any>(
    () => {
      return client("projects", {
        data: param,
      });
    },
    {
      refreshDeps: [param],
    }
  );

  return {
    data,
    loading,
  };
};
