import { useUsers } from "./hooks/useUsers";
import React, { ReactNode } from "react";

interface ProjectContext {
  users: User[];
}

export const ProjectContext = React.createContext<ProjectContext | null>(null);

const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { users } = useUsers();

  return (
    <ProjectContext.Provider value={{ users }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
