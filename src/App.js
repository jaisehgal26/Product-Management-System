import "./App.css";
import React from "react";
import { AuthProvider } from "./components/contexts/AuthContext";

import Routes from "./components/Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
