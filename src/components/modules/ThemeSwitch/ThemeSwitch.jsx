import classnames from "classnames";
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
import { COLOR_THEMES as themes } from "../../shared/ThemeContext/ThemeContext";

const noop = () => {};

function ThemeSwitch({
  className,
  isVisible,
  themeButtonText,
  themeButtonIcon,
  onShowThemeDropdownButtonClick = noop,
  onThemeSelectionButtonClick = noop,
}) {
  const baseClassNames = classnames({
    [className]: !!className,
  });

  return (
    <div className={baseClassNames}>
      <Button
        color={color.blueReverse}
        size={size.medium}
        text={themeButtonText}
        icon={themeButtonIcon}
        onClick={onShowThemeDropdownButtonClick}
      />
      {isVisible && (
        <div className={styles.wrapper}>
          <Dropdown title="Выберите тему">
            <DropdownSingleItem>
              <Button
                color={color.blueReverse}
                size={size.small}
                text="Светлая"
                icon={icon.sun}
                onClick={() => onThemeSelectionButtonClick(themes.light)}
              />
            </DropdownSingleItem>
            <DropdownItemDivider />
            <DropdownSingleItem>
              <Button
                color={color.blue}
                size={size.small}
                text="Темная"
                icon={icon.moon}
                onClick={() => onThemeSelectionButtonClick(themes.dark)}
              />
            </DropdownSingleItem>
          </Dropdown>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitch;
