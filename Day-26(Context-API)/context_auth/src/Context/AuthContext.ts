import { createContext } from "react";
//Global state+types
export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
