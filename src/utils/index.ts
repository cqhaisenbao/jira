import axios from "axios";

export const cleanObject = (obj: any) => {
  const newObj = {} as any;
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

type RequestMethod = "get" | "post" | "put" | "delete" | "patch";

export const Axios = async <T>(
  url: string,
  method: RequestMethod = "get"
): Promise<T> => {
  const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
    headers: { "content-type": "application/json" },
  });

  const { data } = await instance[method](url);
  return data as T;
};
