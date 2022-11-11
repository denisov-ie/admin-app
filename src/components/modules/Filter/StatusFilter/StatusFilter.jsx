import classnames from "classnames";
import { DEFAULT_POSTFIX as postfix, Input } from "components/shared/Input";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { Dropdown, DropdownListItem } from "components/shared/Dropdown";
import Checkbox from "components/shared/Checkbox";
import { STATUSES as status } from "components/modules/Status";
import styles from "./StatusFilter.module.css";

function StatusFilter({ className, state }) {
  const baseClassNames = classnames(styles._, className);

  const [filters, setFilters] = state;

  const handleStatusFilterChange = ({ target: { checked, value } }) => {
    let statusesCopy = [...filters.statuses];
    if (checked) {
      statusesCopy.push(value);
    } else {
      statusesCopy = statusesCopy.filter((item) => item !== value);
    }
    filters.statuses = statusesCopy;
    setFilters({ ...filters });
  };

  const getCheckedValues = (values) => {
    const names = Object.values(status)
      .filter(({ value }) => values.includes(value))
      .map(({ name }) => name);
    return names.length > 0 ? names.join(", ") : "Любой";
  };

  return (
    <div className={baseClassNames}>
      <Dropdown
        className={styles.dropdownWrapper}
        trigger={
          <Input
            className={styles.cursor}
            label="Статус заказа"
            postfix={postfix.icon(icon.vArrow)}
            value={getCheckedValues(filters.statuses)}
            readOnly
          />
        }
      >
        {Object.values(status).map(({ value, name }) => (
          <DropdownListItem key={value}>
            <Checkbox
              text={name}
              value={value}
              onChange={handleStatusFilterChange}
              checked={filters.statuses.includes(value)}
            />
          </DropdownListItem>
        ))}
      </Dropdown>
    </div>
  );
}

export default StatusFilter;
