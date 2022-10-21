import { useContext, useState } from "react";
import {
  isDarkTheme,
  ThemeContext,
} from "../../shared/ThemeContext/ThemeContext";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function ThemeSwitchContainer({ className }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isVisible, setIsVisible] = useState(false);

  const handleShowThemeDropdown = () => {
    setIsVisible((current) => !current);
  };

  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
    setIsVisible(false);
  };

  const themeButtonText = isDarkTheme(theme) ? "Темная тема" : "Светлая тема";

  const themeButtonIcon = isDarkTheme(theme) ? icon.moon : icon.sun;

  return (
    <ThemeSwitch
      className={className}
      isVisible={isVisible}
      themeButtonIcon={themeButtonIcon}
      themeButtonText={themeButtonText}
      onShowThemeDropdownButtonClick={handleShowThemeDropdown}
      onThemeSelectionButtonClick={handleThemeSelection}
    />
  );
}

export default ThemeSwitchContainer;
