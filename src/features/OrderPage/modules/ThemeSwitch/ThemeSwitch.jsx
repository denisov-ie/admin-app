import { useContext, useState } from "react";
import {
  Dropdown,
  DropdownItemDivider,
  DropdownSingleItem,
} from "shared/components/Dropdown";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "shared/components/Button";
import { ICON_TYPE as icon } from "shared/components/Icon";
import {
  COLOR_THEMES as themes,
  isDarkTheme,
  ThemeContext,
} from "context/ThemeContext";
import styles from "./ThemeSwitch.module.css";

function ThemeSwitch({ className }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isSwitcherActive, setIsSwitcherActive] = useState(false);

  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
    setIsSwitcherActive(false);
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
        isActive={isSwitcherActive}
        setIsActive={setIsSwitcherActive}
        trigger={
          <Button
            color={color.blueReverse}
            size={size.medium}
            icon={themeButtonIcon}
          >
            {themeButtonText}
          </Button>
        }
        title="Выберите тему"
      >
        <DropdownSingleItem>
          <Button
            color={lightThemeButtonColor}
            size={size.small}
            icon={icon.sun}
            onClick={() => handleThemeSelection(themes.light)}
          >
            Светлая
          </Button>
        </DropdownSingleItem>
        <DropdownItemDivider />
        <DropdownSingleItem>
          <Button
            color={darkThemeButtonColor}
            size={size.small}
            icon={icon.moon}
            onClick={() => handleThemeSelection(themes.dark)}
          >
            Темная
          </Button>
        </DropdownSingleItem>
      </Dropdown>
    </div>
  );
}

export default ThemeSwitch;
