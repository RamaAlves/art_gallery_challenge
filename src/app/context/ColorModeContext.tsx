import { createContext, useEffect, useState } from "react";
import { ChildrenType, ColorModeContextType } from "../interfaces/interfaces";
import { DARK_MODE } from "../constants/localStorageConstants";

export const ColorModeContext = createContext<ColorModeContextType>(null!);

export function ColorModeProvider({ children }: ChildrenType) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const value = { darkMode, setDarkMode };
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem(DARK_MODE)!);
    if (theme) {
      setDarkMode(theme);
    }
  }, []);
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
}
