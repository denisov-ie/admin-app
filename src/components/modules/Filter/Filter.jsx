import classnames from "classnames";
import Button, {
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "../../shared/Button/Button";
import Searchbar from "../../shared/Searchbar/Searchbar";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import styles from "./Filter.module.css";
import DateFilter from "../DateFilter/DateFilter";
import StateFilter from "../StateFilter/StateFilter";
import AmountFilter from "../AmountFilter/AmountFilter";

const noop = () => {};

function Filter({
  isActive,
  onShowFilterButtonClick = noop,
  onResetButtonClick = noop,
  searchValue,
  onSearchbarChange = noop,
  className,
}) {
  //
  const blockClass = classnames(styles._, className);
  const buttonResetClass = classnames({
    [styles.hidden]: !isActive,
  });

  // render
  return (
    <div className={blockClass}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar
              value={searchValue}
              onChange={onSearchbarChange}
              placeholder="Номер заказа или ФИО"
            />
          </div>

          <Button
            color={isActive ? color.blue : color.blueReverse}
            size={size.medium}
            text="Фильтры"
            icon={icon.filter}
            onClick={onShowFilterButtonClick}
          />
          <Button
            className={buttonResetClass}
            color={color.blueReverse}
            size={size.medium}
            text="Сбросить фильтры"
            id="filterResetButton"
            onClick={onResetButtonClick}
          />
        </div>
        <Button
          color={color.blueReverse}
          size={size.medium}
          text="Загрузка"
          icon={icon.refresh}
        />
      </div>

      {isActive && (
        <div className={styles.extendedBlock}>
          <DateFilter className={styles.dateFilter} />
          <StateFilter className={styles.stateFilter} />
          <AmountFilter className={styles.amountFilter} />
          <Button
            className={styles.applyFilterButton}
            color={color.blueReverse}
            size={size.medium}
            text="Применить"
          />
        </div>
      )}
    </div>
  );
}

export default Filter;
