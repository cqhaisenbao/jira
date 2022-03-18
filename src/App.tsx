import React from "react";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { FullPageErrorFallback } from "./components/lib";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="App">
        <ErrorBoundary fallbackRender={FullPageErrorFallback}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
