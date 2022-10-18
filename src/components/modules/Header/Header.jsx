import { useState } from "react";
import classnames from "classnames";
import Button, {
  buttonColors as color,
  buttonSizes as size,
} from "../../shared/Button/Button";
import { iconTypes as icon } from "../../shared/Icon/Icon";
import styles from "./Header.module.css";
import Dropdown, {
  dropdownStyles as dropdown,
} from "../../shared/Dropdown/Dropdown";
import switchTheme, {
  colorThemes as themes,
  isDarkTheme,
} from "../../shared/Common/switchTheme";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const [theme, setTheme] = useState(themes.light);

  const handleShowThemeDropdown = () => {
    setIsVisible((current) => !current);
  };

  const handleThemeSelection = (currentTheme) => {
    switchTheme(currentTheme);
    setTheme(currentTheme);
    setIsVisible((current) => !current);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Список заказов</h1>
      <Button
        color={color.buttonBlueReverse}
        size={size.buttonMedium}
        buttonText={isDarkTheme(theme) ? "Темная тема" : "Светлая тема"}
        icon={isDarkTheme(theme) ? icon.moon : icon.sun}
        onClick={handleShowThemeDropdown}
      />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={classnames(styles.header__themeDropdownWrapper, {
          [styles.header__themeDropdownWrapper_hidden]: !isVisible,
        })}
      >
        <Dropdown style={dropdown.default} title="Выберите тему">
          <Button
            color={color.buttonBlueReverse}
            size={size.buttonSmall}
            buttonText="Светлая"
            icon={icon.sun}
            onClick={() => handleThemeSelection(themes.light)}
          />
          <Button
            color={color.buttonBlue}
            size={size.buttonSmall}
            buttonText="Темная"
            icon={icon.moon}
            onClick={() => handleThemeSelection(themes.dark)}
          />
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
