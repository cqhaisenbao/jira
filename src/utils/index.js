import axios from "axios";

export const cleanObject = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export const Axios = (url, method = "get") => {
  const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
    headers: { "content-type": "application/json" },
  });

  return instance[method](url);
};
