import AdminLayout from "./layouts/AdminLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import { useState } from "react";
import Login from "./pages/Login";

type ProtectedProps = {
  isLoggedIn: boolean;
  onLogout: () => void;
  children: React.ReactNode;
};
const ProtectedRoute = ({ isLoggedIn, onLogout, children }: ProtectedProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <AdminLayout onLogout={onLogout}>{children}</AdminLayout>;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                onLogin={() => {
                  setIsLoggedIn(true);
                  localStorage.setItem("isLoggedIn", "true");
                }}
              />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                onLogout={() => {
                  setIsLoggedIn(false);
                  localStorage.removeItem("isLoggedIn");
                }}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              isLoggedIn ? (
                <AdminLayout onLogout={() => setIsLoggedIn(false)}>
                  <Users />
                </AdminLayout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
