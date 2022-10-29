import classnames from "classnames";
import { useContext } from "react";
import styles from "./DateFilter.module.css";
import Input, { DEFAULT_PREFIX as prefix } from "../../shared/Input/Input";
import {
  FilterContext,
  FILTER_TYPES as filterType,
  FILTER_INTERVAL_TYPES as filterIntervalType,
} from "../../context/FilterContext/FilterContext";

function DateFilter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { filters, handleFilterChange, handleFilterClear } =
    useContext(FilterContext);

  const handleDateFilterChange = (e, filterSegment) => {
    handleFilterChange(e, filterType.dates, filterSegment);
  };

  const handleDateFilterClear = (filterSegment) => {
    handleFilterClear(filterType.dates, filterSegment);
  };

  return (
    <div className={baseClassNames}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("с")}
        value={filters.dates.from}
        externalOnChangeListener={(e) =>
          handleDateFilterChange(e, filterIntervalType.from)
        }
        externalOnClearListener={() =>
          handleDateFilterClear(filterIntervalType.from)
        }
      />
      <Input
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("по")}
        value={filters.dates.to}
        externalOnChangeListener={(e) =>
          handleDateFilterChange(e, filterIntervalType.to)
        }
        externalOnClearListener={() =>
          handleDateFilterClear(filterIntervalType.to)
        }
      />
    </div>
  );
}

export default DateFilter;
