import classnames from "classnames";
import { useState, useContext } from "react";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import Searchbar from "components/shared/Searchbar";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import StatusFilter from "components/modules/StatusFilter";
import AmountFilter from "components/modules/AmountFilter";
import DateFilter from "components/modules/DateFilter";
import { FilterContext } from "components/context/FilterContext";
import styles from "./Filter.module.css";

function Filter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { handleClearAllFilters } = useContext(FilterContext);

  const [isActive, setIsActive] = useState(false);

  const handleShowExtendedFilters = () => {
    setIsActive(!isActive);
  };

  const filterButtonColor = isActive ? color.blue : color.blueReverse;

  return (
    <div className={baseClassNames}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar placeholder="Номер заказа или ФИО" />
          </div>
          <div className={styles.filterButtonWrapper}>
            <Button
              color={filterButtonColor}
              size={size.medium}
              text="Фильтры"
              icon={icon.filter}
              onClick={handleShowExtendedFilters}
            />
          </div>
          {isActive && (
            <Button
              color={color.blueReverse}
              size={size.medium}
              text="Сбросить фильтры"
              id="filterResetButton"
              onClick={handleClearAllFilters}
            />
          )}
        </div>
        <div className={styles.rightBlock}>
          <Icon name={icon.refresh} className={styles.icon} />
          Загрузка
        </div>
      </div>
      {isActive && (
        <div className={styles.extendedBlock}>
          <DateFilter className={styles.dateFilter} />
          <StatusFilter className={styles.stateFilter} />
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
