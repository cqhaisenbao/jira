import React, { ReactNode, useState } from "react";
import * as auth from "../auth-provider";
import { http } from "../utils/http";
import { useRequest } from "ahooks";
import FullScreenLoading from "../components/FullScreenLoading";

interface AuthForm {
  username: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  register: (form: AuthForm) => Promise<void>;
  login: (form: AuthForm) => Promise<void>;
  logout: () => void;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.result;
  }
  console.log(user);
  return user;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { loading } = useRequest(bootstrapUser, {
    onSuccess: (data) => {
      setUser(data);
    },
  });
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <>
      {loading ? (
        <FullScreenLoading />
      ) : (
        <AuthContext.Provider
          children={children}
          value={{ user, login, logout, register }}
        />
      )}
    </>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
