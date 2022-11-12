import classnames from "classnames";
import { DEFAULT_PREFIX as prefix, Input } from "components/shared/Input";
import styles from "./AmountFilter.module.css";

function AmountFilter({ className, state }) {
  const baseClassNames = classnames(styles._, className);

  const [filters, setFilters] = state;

  const handleAmountFromFilterChange = ({ target: { value } }) => {
    filters.amountFrom = value;
    setFilters({ ...filters });
  };

  const handleAmountToFilterChange = ({ target: { value } }) => {
    filters.amountTo = value;
    setFilters({ ...filters });
  };

  const handleAmountFromFilterClear = () => {
    filters.amountFrom = "";
    setFilters({ ...filters });
  };

  const handleAmountToFilterClear = () => {
    filters.amountTo = "";
    setFilters({ ...filters });
  };

  const amountPattern = /^\d+(,\d{1,2})?$|^$/;

  return (
    <div className={baseClassNames}>
      <Input
        label="Сумма заказа"
        placeholder="₽"
        prefix={prefix.text("от")}
        value={filters.amountFrom}
        invalid={!amountPattern.test(filters.amountFrom)}
        onChange={handleAmountFromFilterChange}
        onClear={handleAmountFromFilterClear}
      />
      <Input
        placeholder="₽"
        prefix={prefix.text("до")}
        value={filters.amountTo}
        invalid={!amountPattern.test(filters.amountTo)}
        onChange={handleAmountToFilterChange}
        onClear={handleAmountToFilterClear}
      />
    </div>
  );
}

export default AmountFilter;
