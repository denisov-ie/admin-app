import { useContext, useEffect, useRef, useState } from "react";
import styles from "./ThemeSwitch.module.css";
import Dropdown, {
  DropdownItemDivider,
  DropdownSingleItem,
} from "../../shared/Dropdown/Dropdown";
import Button, {
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "../../shared/Button/Button";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import {
  COLOR_THEMES as themes,
  isDarkTheme,
  ThemeContext,
} from "../../context/ThemeContext/ThemeContext";

function ThemeSwitch({ className }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleShowThemeDropdown = () => {
    setIsActive(!isActive);
  };

  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
    setIsActive(false);
  };

  const themeButtonText = isDarkTheme(theme) ? "Темная тема" : "Светлая тема";

  const themeButtonIcon = isDarkTheme(theme) ? icon.moon : icon.sun;

  const lightThemeButtonColor = isDarkTheme(theme)
    ? color.blueReverse
    : color.blue;

  const darkThemeButtonColor = isDarkTheme(theme)
    ? color.blue
    : color.blueReverse;

  return (
    <div className={className} ref={dropdownRef}>
      <Button
        color={color.blueReverse}
        size={size.medium}
        text={themeButtonText}
        icon={themeButtonIcon}
        onClick={handleShowThemeDropdown}
      />
      {isActive && (
        <div className={styles.wrapper}>
          <Dropdown title="Выберите тему">
            <DropdownSingleItem>
              <Button
                color={lightThemeButtonColor}
                size={size.small}
                text="Светлая"
                icon={icon.sun}
                onClick={() => handleThemeSelection(themes.light)}
              />
            </DropdownSingleItem>
            <DropdownItemDivider />
            <DropdownSingleItem>
              <Button
                color={darkThemeButtonColor}
                size={size.small}
                text="Темная"
                icon={icon.moon}
                onClick={() => handleThemeSelection(themes.dark)}
              />
            </DropdownSingleItem>
          </Dropdown>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitch;
