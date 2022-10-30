import classnames from "classnames";
import { useContext } from "react";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import {
  FilterContext,
  FILTER_TYPES as filterType,
  FILTER_INTERVAL_TYPES as filterIntervalType,
} from "components/context/FilterContext";
import styles from "./DateFilter.module.css";

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
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        onChange={(e) => handleDateFilterChange(e, filterIntervalType.from)}
        onClear={() => handleDateFilterClear(filterIntervalType.from)}
      />
      <Input
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("по")}
        value={filters.dates.to}
        pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
        onChange={(e) => handleDateFilterChange(e, filterIntervalType.to)}
        onClear={() => handleDateFilterClear(filterIntervalType.to)}
      />
    </div>
  );
}

export default DateFilter;
