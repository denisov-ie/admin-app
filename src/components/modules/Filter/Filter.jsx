import { useState } from "react";
import classnames from "classnames";
import Button, {
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "../../shared/Button/Button";
import Searchbar from "../../shared/Searchbar/Searchbar";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import styles from "./Filter.module.css";
import DateFilter from "./DateFilter/DateFilter";
import StateFilter from "./StateFilter/StateFilter";
import AmountFilter from "./AmountFilter/AmountFilter";

function Filter() {
  const [isActive, setIsActive] = useState(false);

  const handleShowExtendedFilters = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className={styles._}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar placeholder="Номер заказа или ФИО" />
          </div>
          <Button
            color={isActive ? color.blue : color.blueReverse}
            size={size.medium}
            text="Фильтры"
            icon={icon.filter}
            onClick={handleShowExtendedFilters}
          />
          <Button
            className={classnames({
              [styles.hidden]: !isActive,
            })}
            color={color.blueReverse}
            size={size.medium}
            text="Сбросить фильтры"
            id="filterResetButton"
          />
        </div>
        <Button
          color={color.blueReverse}
          size={size.medium}
          text="Загрузка"
          icon={icon.refresh}
        />
      </div>
      <div
        className={classnames(styles.extendedBlock, {
          [styles.hidden]: !isActive,
        })}
      >
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
    </div>
  );
}

export default Filter;
