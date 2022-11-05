import classnames from "classnames";
import { useContext } from "react";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import {
  FilterContext,
  FILTER_TYPES as filterType,
} from "components/context/FilterContext";
import styles from "./DateFilter.module.css";

function DateFilter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { filters, handleFilterChange, handleFilterClear } =
    useContext(FilterContext);

  return (
    <div className={baseClassNames}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("с")}
        value={filters.dateFrom}
        invalid={!/^[0-9]{2}.[0-9]{2}.[0-9]{4}$|^$/.test(filters.dateFrom)}
        onChange={(e) => handleFilterChange(e, filterType.dateFrom)}
        onClear={() => handleFilterClear(filterType.dateFrom)}
      />
      <Input
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("по")}
        value={filters.dateTo}
        invalid={!/^[0-9]{2}.[0-9]{2}.[0-9]{4}$|^$/.test(filters.dateTo)}
        onChange={(e) => handleFilterChange(e, filterType.dateTo)}
        onClear={() => handleFilterClear(filterType.dateTo)}
      />
    </div>
  );
}

export default DateFilter;
