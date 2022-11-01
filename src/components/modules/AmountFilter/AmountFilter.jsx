import classnames from "classnames";
import { useContext } from "react";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import {
  FilterContext,
  FILTER_TYPES as filterType,
} from "components/context/FilterContext";
import styles from "./AmountFilter.module.css";

function AmountFilter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { filters, handleFilterChange, handleFilterClear } =
    useContext(FilterContext);

  return (
    <div className={baseClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="₽"
        prefix={prefix.text("от")}
        value={filters.amountFrom}
        invalid={!/^\d+(,\d{1,2})?$|^$/.test(filters.amountFrom)}
        onChange={(e) => handleFilterChange(e, filterType.amountFrom)}
        onClear={() => handleFilterClear(filterType.amountFrom)}
      />
      <Input
        placeholder="₽"
        prefix={prefix.text("до")}
        value={filters.amountTo}
        invalid={!/^\d+(,\d{1,2})?$|^$/.test(filters.amountTo)}
        onChange={(e) => handleFilterChange(e, filterType.amountTo)}
        onClear={() => handleFilterClear(filterType.amountTo)}
      />
    </div>
  );
}

export default AmountFilter;
