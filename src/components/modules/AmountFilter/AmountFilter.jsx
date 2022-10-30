import classnames from "classnames";
import { useContext } from "react";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import {
  FilterContext,
  FILTER_TYPES as filterType,
  FILTER_INTERVAL_TYPES as filterIntervalType,
} from "components/context/FilterContext";
import styles from "./AmountFilter.module.css";

function AmountFilter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { filters, handleFilterChange, handleFilterClear } =
    useContext(FilterContext);

  const handleAmountFilterChange = (e, filterSegment) => {
    handleFilterChange(e, filterType.amounts, filterSegment);
  };

  const handleAmountsFilterClear = (filterSegment) => {
    handleFilterClear(filterType.amounts, filterSegment);
  };

  return (
    <div className={baseClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="₽"
        prefix={prefix.text("от")}
        value={filters.amounts.from}
        pattern="^\d+(,\d{1,2})?$"
        onChange={(e) => handleAmountFilterChange(e, filterIntervalType.from)}
        onClear={() => handleAmountsFilterClear(filterIntervalType.from)}
      />
      <Input
        placeholder="₽"
        prefix={prefix.text("до")}
        value={filters.amounts.to}
        pattern="^\d+(,\d{1,2})?$"
        onChange={(e) => handleAmountFilterChange(e, filterIntervalType.to)}
        onClear={() => handleAmountsFilterClear(filterIntervalType.to)}
      />
    </div>
  );
}

export default AmountFilter;
