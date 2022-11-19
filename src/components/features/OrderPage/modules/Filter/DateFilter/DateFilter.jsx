import classnames from "classnames";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import styles from "./DateFilter.module.css";

function DateFilter({ className, state }) {
  const baseClassNames = classnames(styles._, className);

  const [filters, setFilters] = state;

  const handleDateFromFilterChange = ({ target: { value } }) => {
    filters.dateFrom = value;
    setFilters({ ...filters });
  };

  const handleDateToFilterChange = ({ target: { value } }) => {
    filters.dateTo = value;
    setFilters({ ...filters });
  };

  const handleDateFromFilterClear = () => {
    filters.dateFrom = "";
    setFilters({ ...filters });
  };

  const handleDateToFilterClear = () => {
    filters.dateTo = "";
    setFilters({ ...filters });
  };

  const datePattern = /^[0-9]{2}.[0-9]{2}.[0-9]{4}$|^$/;

  return (
    <div className={baseClassNames}>
      <Input
        label="Дата оформления"
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("с")}
        value={filters.dateFrom}
        invalid={!datePattern.test(filters.dateFrom)}
        onChange={handleDateFromFilterChange}
        onClear={handleDateFromFilterClear}
      />
      <Input
        placeholder="dd.mm.yyyy"
        prefix={prefix.text("по")}
        value={filters.dateTo}
        invalid={!datePattern.test(filters.dateTo)}
        onChange={handleDateToFilterChange}
        onClear={handleDateToFilterClear}
      />
    </div>
  );
}

export default DateFilter;
