import classnames from "classnames";
import { useContext } from "react";
import { DEFAULT_POSTFIX as postfix, Input } from "components/shared/Input";
import { ICON_TYPE as icon } from "components/shared/Icon";
import { Dropdown, DropdownListItem } from "components/shared/Dropdown";
import Checkbox from "components/shared/Checkbox";
import {
  FilterContext,
  FILTER_TYPES as filterType,
} from "components/context/FilterContext";
import { STATUSES as status } from "components/modules/Status";
import styles from "components/modules/Filter/StatusFilter/StatusFilter.module.css";

function StatusFilter({ className }) {
  const baseClassNames = classnames(styles._, className);

  const { filters, handleFilterChange } = useContext(FilterContext);

  const handleStatusFilterChange = (e, filterSegment) => {
    handleFilterChange(e, filterType.statuses, filterSegment);
  };

  const getCheckedValues = (values) => {
    const checkedValues = [];
    for (const key in values) {
      if (values[key]) {
        checkedValues.push(status[key].name);
      }
    }
    return checkedValues.length > 0 ? checkedValues.join(", ") : "Любой";
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
              onChange={(e) => handleStatusFilterChange(e, value)}
              checked={filters.statuses[value]}
            />
          </DropdownListItem>
        ))}
      </Dropdown>
    </div>
  );
}

export default StatusFilter;
