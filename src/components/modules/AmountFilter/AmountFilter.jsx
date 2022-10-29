import classnames from "classnames";
import { useContext } from "react";
import styles from "./AmountFilter.module.css";
import Input, { DEFAULT_PREFIX as prefix } from "../../shared/Input/Input";
import {
  FilterContext,
  FILTER_TYPES as filterType,
  FILTER_INTERVAL_TYPES as filterIntervalType,
} from "../../context/FilterContext/FilterContext";

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
        externalOnChangeListener={(e) =>
          handleAmountFilterChange(e, filterIntervalType.from)
        }
        externalOnClearListener={() =>
          handleAmountsFilterClear(filterIntervalType.from)
        }
      />
      <Input
        placeholder="₽"
        prefix={prefix.text("до")}
        value={filters.amounts.to}
        externalOnChangeListener={(e) =>
          handleAmountFilterChange(e, filterIntervalType.to)
        }
        externalOnClearListener={() =>
          handleAmountsFilterClear(filterIntervalType.to)
        }
      />
    </div>
  );
}

export default AmountFilter;
