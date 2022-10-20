import classnames from "classnames";
import { useContext, useState } from "react";
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
} from "../../shared/ThemeContext/ThemeContext";

function ThemeSwitch({ className }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isVisible, setIsVisible] = useState(false);

  const handleShowThemeDropdown = () => {
    setIsVisible((current) => !current);
  };

  const handleThemeSelection = (currentTheme) => {
    toggleTheme(currentTheme);
    setIsVisible(false);
  };

  const classNames = classnames({
    [className]: !!className,
  });

  return (
    <div className={classNames}>
      <Button
        color={color.blueReverse}
        size={size.medium}
        text={isDarkTheme(theme) ? "Темная тема" : "Светлая тема"}
        icon={isDarkTheme(theme) ? icon.moon : icon.sun}
        onClick={handleShowThemeDropdown}
      />
      <div
        className={classnames(styles.wrapper, {
          [styles.hidden]: !isVisible,
        })}
      >
        <Dropdown title="Выберите тему">
          <DropdownSingleItem>
            <Button
              color={color.blueReverse}
              size={size.small}
              text="Светлая"
              icon={icon.sun}
              onClick={() => handleThemeSelection(themes.light)}
            />
          </DropdownSingleItem>
          <DropdownItemDivider />
          <DropdownSingleItem>
            <Button
              color={color.blue}
              size={size.small}
              text="Темная"
              icon={icon.moon}
              onClick={() => handleThemeSelection(themes.dark)}
            />
          </DropdownSingleItem>
        </Dropdown>
      </div>
    </div>
  );
}

export default ThemeSwitch;
