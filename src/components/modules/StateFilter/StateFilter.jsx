import classnames from "classnames";
import styles from "./StateFilter.module.css";
import InputContainer, {
  DEFAULT_POSTFIX as postfix,
} from "../../shared/InputContainer/InputContainer";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import Dropdown, { DropdownListItem } from "../../shared/Dropdown/Dropdown";
import Checkbox from "../../shared/Checkbox/Checkbox";

const noop = () => {};

function StateFilter({
  className,
  isVisible,
  onClickShowStateDropdownInput = noop,
}) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={baseClassNames}>
      <InputContainer
        label="Статус заказа"
        placeholder="Любой"
        postfix={postfix.icon(icon.vArrow)}
        onClick={onClickShowStateDropdownInput}
        hideReset
      />
      {isVisible && (
        <div className={styles.wrapper}>
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
      )}
    </div>
  );
}

export default StateFilter;
