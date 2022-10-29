import classnames from "classnames";
import { useState, useContext } from "react";
import Button, {
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "../../shared/Button/Button";
import Searchbar from "../../shared/Searchbar/Searchbar";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import styles from "./Filter.module.css";
import StatusFilter from "../StatusFilter/StatusFilter";
import AmountFilter from "../AmountFilter/AmountFilter";
import DateFilter from "../DateFilter/DateFilter";
import { FilterContext } from "../../context/FilterContext/FilterContext";

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
          <Button
            color={filterButtonColor}
            size={size.medium}
            text="Фильтры"
            icon={icon.filter}
            onClick={handleShowExtendedFilters}
          />
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
