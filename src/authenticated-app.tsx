import ProjectListScreen from "./screens/project-list";
import { useAuth } from "./context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </>
  );
};
