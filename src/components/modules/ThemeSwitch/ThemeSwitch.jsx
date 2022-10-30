import { useContext } from "react";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownSingleItem,
} from "components/shared/Dropdown";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import { ICON_TYPE as icon } from "components/shared/Icon";
import {
  COLOR_THEMES as themes,
  isDarkTheme,
  ThemeContext,
} from "components/context/ThemeContext";
import styles from "./ThemeSwitch.module.css";

function ThemeSwitch({ className }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
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
    <div className={className}>
      <Dropdown
        className={styles.dropdownWrapper}
        trigger={
          <Button
            color={color.blueReverse}
            size={size.medium}
            text={themeButtonText}
            icon={themeButtonIcon}
          />
        }
        title="Выберите тему"
      >
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
  );
}

export default ThemeSwitch;
