import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext();

export const COLOR_THEMES = {
  dark: "dark",
  light: "light",
};

export const isDarkTheme = (theme) => theme === COLOR_THEMES.dark;

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(COLOR_THEMES.light);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback((currentTheme) => {
    setTheme(currentTheme);
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
