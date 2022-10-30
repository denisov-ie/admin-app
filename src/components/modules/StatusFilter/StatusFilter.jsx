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
import styles from "./StatusFilter.module.css";

const STATUSES = {
  new: { value: "new", name: "Новый" },
  calculation: { value: "calculation", name: "Рассчет" },
  confirmed: { value: "confirmed", name: "Подтвержден" },
  postponed: { value: "postponed", name: "Отложен" },
  executed: { value: "executed", name: "Выполнен" },
  canceled: { value: "canceled", name: "Отменен" },
};

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
        checkedValues.push(STATUSES[key].name);
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
        <DropdownListItem>
          <Checkbox
            text="Новый"
            onChange={(e) => handleStatusFilterChange(e, STATUSES.new.value)}
            checked={filters.statuses[STATUSES.new.value]}
          />
        </DropdownListItem>
        <DropdownListItem>
          <Checkbox
            text="Рассчет"
            onChange={(e) =>
              handleStatusFilterChange(e, STATUSES.calculation.value)
            }
            checked={filters.statuses[STATUSES.calculation.value]}
          />
        </DropdownListItem>
        <DropdownListItem>
          <Checkbox
            text="Подтвержен"
            onChange={(e) =>
              handleStatusFilterChange(e, STATUSES.confirmed.value)
            }
            checked={filters.statuses[STATUSES.confirmed.value]}
          />
        </DropdownListItem>
        <DropdownListItem>
          <Checkbox
            text="Отложен"
            onChange={(e) =>
              handleStatusFilterChange(e, STATUSES.postponed.value)
            }
            checked={filters.statuses[STATUSES.postponed.value]}
          />
        </DropdownListItem>
        <DropdownListItem>
          <Checkbox
            text="Выполнен"
            onChange={(e) =>
              handleStatusFilterChange(e, STATUSES.executed.value)
            }
            checked={filters.statuses[STATUSES.executed.value]}
          />
        </DropdownListItem>
        <DropdownListItem>
          <Checkbox
            text="Отменен"
            onChange={(e) =>
              handleStatusFilterChange(e, STATUSES.canceled.value)
            }
            checked={filters.statuses[STATUSES.canceled.value]}
          />
        </DropdownListItem>
      </Dropdown>
    </div>
  );
}

export default StatusFilter;
