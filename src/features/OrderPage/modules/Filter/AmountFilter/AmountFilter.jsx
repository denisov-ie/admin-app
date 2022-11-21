import classnames from "classnames";
import { DEFAULT_PREFIX as prefix, Input } from "shared/components/Input";
import styles from "./AmountFilter.module.css";

function AmountFilter({ className, filtersState }) {
  const baseClassNames = classnames(styles._, className);

  const [filters, setFilters] = filtersState;

  const handleAmountFromFilterChange = ({ target: { value } }) => {
    setFilters({ ...filters, amountFrom: value });
  };

  const handleAmountToFilterChange = ({ target: { value } }) => {
    setFilters({ ...filters, amountTo: value });
  };

  const handleAmountFromFilterClear = () => {
    setFilters({ ...filters, amountFrom: "" });
  };

  const handleAmountToFilterClear = () => {
    setFilters({ ...filters, amountTo: "" });
  };

  const isAmountValid = (value) => /^\d+(,\d{1,2})?$|^$/.test(value);

  return (
    <div className={baseClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="₽"
        prefix={prefix.text("от")}
        value={filters.amountFrom}
        invalid={!isAmountValid(filters.amountFrom)}
        onChange={handleAmountFromFilterChange}
        onClear={handleAmountFromFilterClear}
      />
      <Input
        placeholder="₽"
        prefix={prefix.text("до")}
        value={filters.amountTo}
        invalid={!isAmountValid(filters.amountTo)}
        onChange={handleAmountToFilterChange}
        onClear={handleAmountToFilterClear}
      />
    </div>
  );
}

export default AmountFilter;
