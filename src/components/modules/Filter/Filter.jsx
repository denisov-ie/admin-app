import classnames from "classnames";
import Button, {
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "../../shared/Button/Button";
import Searchbar from "../../shared/Searchbar/Searchbar";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import styles from "./Filter.module.css";
import StateFilterContainer from "../StateFilterContainer/StateFilterContainer";
import AmountFilter from "../AmountFilter/AmountFilter";
import DateFilter from "../DateFilter/DateFilter";

const noop = () => {};

function Filter({
  className,
  isActive,
  filterButtonColor,
  onShowExtendedFiltersButtonClick = noop,
}) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={baseClassNames}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar placeholder="Номер заказа или ФИО" />
          </div>
          <Button
            color={filterButtonColor}
            size={size.medium}
            text="Фильтры"
            icon={icon.filter}
            onClick={onShowExtendedFiltersButtonClick}
          />
          {isActive && (
            <Button
              color={color.blueReverse}
              size={size.medium}
              text="Сбросить фильтры"
              id="filterResetButton"
            />
          )}
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
          <StateFilterContainer className={styles.stateFilter} />
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
