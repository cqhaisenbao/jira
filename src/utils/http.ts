import qs from "qs";
import * as auth from "../auth-provider";
import { useAuth } from "../context/auth-context";
import { cleanObject } from "./index";

const apiURL = "http://127.0.0.1:4523/mock/741544";

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? token : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint = endpoint + "?" + qs.stringify(cleanObject(data || {}));
  } else {
    config.body = JSON.stringify(data);
  }

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject("Unauthorized");
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endPoint, config]: Parameters<typeof http>) => {
    return http(endPoint, {
      ...config,
      token: user ? user.token : "",
    });
  };
};
