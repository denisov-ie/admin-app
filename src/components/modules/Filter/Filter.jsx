import { useState } from "react";
import classnames from "classnames";
import Button, {
  buttonColors as color,
  buttonSizes as size,
} from "../../shared/Button/Button";
import Searchbar from "../../shared/Searchbar/Searchbar";
import Input, { inputStyles } from "../../shared/Input/Input";
import { iconTypes as icon } from "../../shared/Icon/Icon";
import styles from "./Filter.module.css";
import Dropdown, {
  dropdownStyles as dropdown,
} from "../../shared/Dropdown/Dropdown";
import Checkbox from "../../shared/Checkbox/Checkbox";

function Filter({ ...props }) {
  const [isActive, setIsActive] = useState(false);

  const handleShowExtendedFilters = () => {
    setIsActive((current) => !current);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleShowStateDropdown = () => {
    setIsVisible((current) => !current);
  };

  return (
    <div className={styles.filter} {...props}>
      <div className={styles.filter__mainBlock}>
        <div className={styles.filter__leftBlock}>
          <div className={styles.filter__searchbarWrapper}>
            <Searchbar placeholderText="Номер заказа или ФИО" />
          </div>
          <Button
            color={isActive ? color.buttonBlue : color.buttonBlueReverse}
            size={size.buttonMedium}
            buttonText="Фильтры"
            icon={icon.filter}
            onClick={handleShowExtendedFilters}
          />
          <Button
            className={classnames({
              [styles.filter__clearFilterButton_hidden]: !isActive,
            })}
            color={color.buttonBlueReverse}
            size={size.buttonMedium}
            buttonText="Сбросить фильтры"
            id="filterResetButton"
          />
        </div>
        <Button
          color={color.buttonBlueReverse}
          size={size.buttonMedium}
          buttonText="Загрузка"
          icon={icon.refresh}
        />
      </div>
      <div
        className={classnames(styles.filter__extendedBlock, {
          [styles.filter__extendedBlock_hidden]: !isActive,
        })}
      >
        <div className={styles.filter__inputDate}>
          <Input
            style={inputStyles.default}
            labelText="Дата оформления"
            placeholderText="dd.mm.yyyy"
            annotationText="с"
          />
          <Input
            style={inputStyles.default}
            placeholderText="dd.mm.yyyy"
            annotationText="по"
          />
        </div>
        <div className={styles.filter__dropdownState}>
          <Input
            style={inputStyles.dropdown}
            labelText="Статус заказа"
            placeholderText="Любой"
            onClick={handleShowStateDropdown}
          />
          <div
            className={classnames(styles.filter__dropdownStateWrapper, {
              [styles.filter__dropdownStateWrapper_hidden]: !isVisible,
            })}
          >
            <Dropdown style={dropdown.list}>
              <Checkbox checkboxText="Новый" />
              <Checkbox checkboxText="Рассчет" />
              <Checkbox checkboxText="Подтвержен" />
              <Checkbox checkboxText="Отложен" />
              <Checkbox checkboxText="Выполнен" />
              <Checkbox checkboxText="Отменен" />
            </Dropdown>
          </div>
        </div>
        <div className={styles.filter__inputOrderAmount}>
          <Input
            style={inputStyles.default}
            labelText="Сумма заказа"
            placeholderText="₽"
            annotationText="от"
          />
          <Input
            style={inputStyles.default}
            placeholderText="₽"
            annotationText="до"
          />
        </div>
        <Button
          className={styles.filter__applyFilterButton}
          color={color.buttonBlueReverse}
          size={size.buttonMedium}
          buttonText="Применить"
        />
      </div>
    </div>
  );
}

export default Filter;
