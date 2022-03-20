import { useUrlQueryParam } from "../../../utils/url";
import { useMemo } from "react";

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(["name", "personId"]);
  return useMemo(() => {
    return [
      { ...param, personId: Number(param.personId) || undefined },
      setParam,
    ] as const;
  }, [param]);
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
    "projectCreate",
  ]);
  const open = () => setProjectCreate({ projectCreate: true });
  const close = () => setProjectCreate({ projectCreate: undefined });
  return {
    projectModalOpen: projectCreate === "true",
    open,
    close,
  };
};
