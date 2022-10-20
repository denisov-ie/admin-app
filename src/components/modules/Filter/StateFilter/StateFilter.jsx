import classnames from "classnames";
import { useState } from "react";
import styles from "./StateFilter.module.css";
import Input, {
  DEFAULT_POSTFIX as postfix,
  INPUT_STYLE as input,
} from "../../../shared/Input/Input";
import { ICON_TYPE as icon } from "../../../shared/Icon/Icon";
import Dropdown, { DropdownListItem } from "../../../shared/Dropdown/Dropdown";
import Checkbox from "../../../shared/Checkbox/Checkbox";

function StateFilter({ className }) {
  const classNames = classnames(styles._, {
    [className]: !!className,
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleShowStateDropdown = (e) => {
    e.preventDefault();
    setIsVisible((current) => !current);
  };

  return (
    <div className={classNames}>
      <Input
        style={input.default}
        label="Статус заказа"
        placeholder="Любой"
        postfix={postfix.icon(icon.vArrow)}
        onClick={handleShowStateDropdown}
        hideReset
      />
      <div
        className={classnames(styles.wrapper, {
          [styles.hidden]: !isVisible,
        })}
      >
        <Dropdown>
          <DropdownListItem>
            <Checkbox text="Новый" />
          </DropdownListItem>
          <DropdownListItem>
            <Checkbox text="Рассчет" />
          </DropdownListItem>
          <DropdownListItem>
            <Checkbox text="Подтвержен" />
          </DropdownListItem>
          <DropdownListItem>
            <Checkbox text="Отложен" />
          </DropdownListItem>
          <DropdownListItem>
            <Checkbox text="Выполнен" />
          </DropdownListItem>
          <DropdownListItem>
            <Checkbox text="Отменен" />
          </DropdownListItem>
        </Dropdown>
      </div>
    </div>
  );
}

export default StateFilter;
