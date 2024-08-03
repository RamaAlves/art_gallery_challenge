export interface ChildrenType {
  children: React.ReactNode;
}

export interface ColorModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
