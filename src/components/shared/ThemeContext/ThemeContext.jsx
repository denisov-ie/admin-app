import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const COLOR_THEMES = {
  dark: "dark",
  light: "light",
};

export const isDarkTheme = (theme) => theme === COLOR_THEMES.dark;

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(COLOR_THEMES.light);

  document.documentElement.dataset.theme = theme;

  const toggleTheme = (currentTheme) => {
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
