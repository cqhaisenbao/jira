import { useHttp } from "../../../utils/http";
import { useRequest } from "ahooks";

export const useGetProjects = (param: Partial<Project>) => {
  const client = useHttp();
  const { data, loading, run } = useRequest<
    GeneralResponse<Project[]>,
    Partial<Project> & any[]
  >(
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
    run,
  };
};

export const useEditProject = (run: (params: Partial<Project>) => void) => {
  const client = useHttp();
  const { runAsync: editProject } = useRequest(
    (params: Partial<Project>) => {
      return client(`projects/${params.id}`, {
        method: "PATCH",
        data: params,
      });
    },
    {
      manual: true,
      onSuccess: run,
    }
  );

  return {
    editProject,
  };
};

export const useAddProject = () => {
  const client = useHttp();
  const { runAsync: addProject } = useRequest(
    (params: Partial<Project>) => {
      return client("projects", {
        method: "POST",
        data: params,
      });
    },
    {
      manual: true,
    }
  );

  return {
    addProject,
  };
};
