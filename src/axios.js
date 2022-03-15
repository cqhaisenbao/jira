import axios from "axios";

export default (url, method = "get") => {
  const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
    headers: { "content-type": "application/json" },
  });

  return instance[method](url);
};
