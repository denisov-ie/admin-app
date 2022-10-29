import { createContext, useCallback, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const COLOR_THEMES = {
  dark: "dark",
  light: "light",
};

export const isDarkTheme = (theme) => theme === COLOR_THEMES.dark;

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(COLOR_THEMES.light);

  document.documentElement.dataset.theme = theme;

  const toggleTheme = useCallback((currentTheme) => {
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
