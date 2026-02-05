import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const isAuth = true;

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
