import { createContext } from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);  //Creates a global container

//This container will store:
//current theme (light / dark)
//function to change theme (toggleTheme)
