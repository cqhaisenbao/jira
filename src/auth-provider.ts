const localStorageKey = "__auth_provider_token__";

export const getToken = () => {
  return localStorage.getItem(localStorageKey);
};

export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: { username: string; password: string }) => {
  const res = await fetch("http://127.0.0.1:4523/mock/741544/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const { result } = await res.json();
    return handleUserResponse(result);
  } else {
    throw new Error("Login failed");
  }
};

export const register = async (data: {
  username: string;
  password: string;
}) => {
  const res = await fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    return handleUserResponse(await res.json());
  } else {
    throw new Error("Register failed");
  }
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
