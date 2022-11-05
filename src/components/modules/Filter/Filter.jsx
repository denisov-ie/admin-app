import classnames from "classnames";
import { useState, useContext } from "react";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import Searchbar from "components/shared/Searchbar";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import StatusFilter from "components/modules/Filter/StatusFilter";
import AmountFilter from "components/modules/Filter/AmountFilter";
import DateFilter from "components/modules/Filter/DateFilter";
import {
  FILTER_TYPES as filterType,
  FilterContext,
} from "components/context/FilterContext";
import styles from "./Filter.module.css";

function Filter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { filters, handleFilterChange, handleClearAllFilters } =
    useContext(FilterContext);

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
            <Searchbar
              placeholder="Номер заказа или ФИО"
              value={filters.search}
              onChange={(e) => handleFilterChange(e, filterType.search)}
              onClear={() => handleClearAllFilters(filterType.search)}
            />
          </div>
          <div className={styles.filterButtonWrapper}>
            <Button
              color={filterButtonColor}
              size={size.medium}
              icon={icon.filter}
              onClick={handleShowExtendedFilters}
            >
              Фильтры
            </Button>
          </div>
          {isActive && (
            <Button
              color={color.blueReverse}
              size={size.medium}
              id="filterResetButton"
              onClick={handleClearAllFilters}
            >
              Сбросить фильтры
            </Button>
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
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}

export default Filter;
