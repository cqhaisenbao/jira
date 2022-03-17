import React from "react";
// import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import "./App.css";
import * as auth from "./auth-provider";

function App() {
  // const { user } = useAuth();
  const token = auth.getToken();

  return (
    <div className="App">
      {token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
