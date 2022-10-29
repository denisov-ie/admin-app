import classnames from "classnames";
import { useState, useContext, useEffect, useRef } from "react";
import styles from "./StatusFilter.module.css";
import Input, { DEFAULT_POSTFIX as postfix } from "../../shared/Input/Input";
import { ICON_TYPE as icon } from "../../shared/Icon/Icon";
import Dropdown, { DropdownListItem } from "../../shared/Dropdown/Dropdown";
import Checkbox from "../../shared/Checkbox/Checkbox";
import {
  FilterContext,
  FILTER_TYPES as filterType,
} from "../../context/FilterContext/FilterContext";

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

  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleShowStateDropdown = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

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
    <div className={baseClassNames} ref={dropdownRef}>
      <div className={styles.inputWrapper}>
        <Input
          label="Статус заказа"
          postfix={postfix.icon(icon.vArrow)}
          onClick={handleShowStateDropdown}
          value={getCheckedValues(filters.statuses)}
          hideReset
          readOnly
        />
      </div>
      {isActive && (
        <div className={styles.dropdownWrapper}>
          <Dropdown>
            <DropdownListItem>
              <Checkbox
                text="Новый"
                onChange={(e) =>
                  handleStatusFilterChange(e, STATUSES.new.value)
                }
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
      )}
    </div>
  );
}

export default StatusFilter;
