import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";
import Login from "./pages/Login";

type ProtectedProps = {
  isLoggedIn: boolean;
  onLogout: () => void;
};

const ProtectedRoute = ({ isLoggedIn, onLogout }: ProtectedProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <AdminLayout onLogout={onLogout} />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
      <Route
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/charts" element={<Charts />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
