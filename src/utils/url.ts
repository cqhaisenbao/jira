import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

/**
 * @description 返回页面url中指定键的参数值
 * @param keys
 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return useMemo(() => {
    return [
      keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParams.get(key) || "" };
      }, {} as { [key in K]: string }),
      setSearchParams,
    ] as const;
  }, [searchParams]);
};
