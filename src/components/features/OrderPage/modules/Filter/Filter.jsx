import classnames from "classnames";
import { useState } from "react";
import {
  Button,
  BUTTON_COLOR as color,
  BUTTON_SIZE as size,
} from "components/shared/Button";
import Searchbar from "components/shared/Searchbar";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import StatusFilter from "components/features/OrderPage/modules/Filter/StatusFilter";
import AmountFilter from "components/features/OrderPage/modules/Filter/AmountFilter";
import DateFilter from "components/features/OrderPage/modules/Filter/DateFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilterFields,
  initialState,
  setFilterFields,
} from "components/features/OrderPage/model/slices/filterSlice";
import { clearSortParams } from "components/features/OrderPage/model/slices/sortSlice";
import { setPageNumber } from "components/features/OrderPage/model/slices/paginationSlice";
import { clearSelection } from "components/features/OrderPage/model/slices/selectionSlice";
import { getOrdersIsLoading } from "components/features/OrderPage/model/selectors";
import styles from "./Filter.module.css";

function Filter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const [filters, setFilters] = useState({ ...initialState });

  const isLoading = useSelector(getOrdersIsLoading);

  const handleShowExtendedFilters = () => {
    setIsActive(!isActive);
  };

  const handleSearchFilterChange = ({ target: { value } }) => {
    filters.search = value;
    setFilters({ ...filters });
  };

  const handleSearchFilterClear = () => {
    filters.search = "";
    setFilters({ ...filters });
  };

  const handleClearAllFilters = () => {
    setFilters({ ...initialState });
    dispatch(clearSelection());
    dispatch(setPageNumber({ pageNumber: 0 }));
    dispatch(clearFilterFields());
    dispatch(clearSortParams());
  };

  const handleSearchFilterKeyPress = ({ which }) => {
    if (which === 13) {
      dispatch(clearSelection());
      dispatch(setPageNumber({ pageNumber: 0 }));
      dispatch(setFilterFields({ filters }));
    }
  };

  const handleApplyFiltersClick = () => {
    dispatch(clearSelection());
    dispatch(setPageNumber({ pageNumber: 0 }));
    dispatch(setFilterFields({ filters }));
  };

  const filterButtonColor = isActive ? color.blue : color.blueReverse;

  return (
    <div className={baseClassNames}>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.searchbarWrapper}>
            <Searchbar
              autoFocus
              placeholder="Номер заказа или ФИО"
              onChange={handleSearchFilterChange}
              onClear={handleSearchFilterClear}
              value={filters.search}
              onKeyDown={handleSearchFilterKeyPress}
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
        {isLoading && (
          <div className={styles.rightBlock}>
            <Icon name={icon.refresh} className={styles.icon} />
            Загрузка
          </div>
        )}
      </div>
      {isActive && (
        <div className={styles.extendedBlock}>
          <DateFilter
            className={styles.dateFilter}
            filtersState={[filters, setFilters]}
          />
          <StatusFilter
            className={styles.stateFilter}
            filtersState={[filters, setFilters]}
          />
          <AmountFilter
            className={styles.amountFilter}
            filtersState={[filters, setFilters]}
          />
          <Button
            className={styles.applyFilterButton}
            color={color.blueReverse}
            size={size.medium}
            onClick={handleApplyFiltersClick}
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}

export default Filter;
