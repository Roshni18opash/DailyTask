//manages authentication context and provides a hook to access it
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }

//   return context;
// };
// context/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const data = useContext(AuthContext);
  if (!data) throw new Error("useAuth must be inside AuthProvider");
  return data;
};
