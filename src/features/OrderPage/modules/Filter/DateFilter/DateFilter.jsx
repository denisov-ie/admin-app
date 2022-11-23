import classnames from "classnames";
import { DEFAULT_PREFIX as prefix, Input } from "shared/components/Input";
import styles from "./DateFilter.module.css";

function DateFilter({ className, filtersState }) {
  const baseClassNames = classnames(styles._, className);

  const [filters, setFilters] = filtersState;

  const handleDateFromFilterChange = ({ target: { value } }) => {
    setFilters({ ...filters, dateFrom: value });
  };

  const handleDateToFilterChange = ({ target: { value } }) => {
    setFilters({ ...filters, dateTo: value });
  };

  const handleDateFromFilterClear = () => {
    setFilters({ ...filters, dateFrom: "" });
  };

  const handleDateToFilterClear = () => {
    setFilters({ ...filters, dateTo: "" });
  };

  const isDateValid = (value) => /^[0-9]{2}.[0-9]{2}.[0-9]{4}$|^$/.test(value);

  return (
    <div className={baseClassNames}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("с")}
        value={filters.dateFrom}
        invalid={!isDateValid(filters.dateFrom)}
        onChange={handleDateFromFilterChange}
        onClear={handleDateFromFilterClear}
      />
      <Input
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("по")}
        value={filters.dateTo}
        invalid={!isDateValid(filters.dateTo)}
        onChange={handleDateToFilterChange}
        onClear={handleDateToFilterClear}
      />
    </div>
  );
}

export default DateFilter;
