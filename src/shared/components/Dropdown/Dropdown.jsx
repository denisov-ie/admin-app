import ControlledDropdown from "shared/components/Dropdown/ControlledDropdown";
import UncontrolledDropdown from "shared/components/Dropdown/UncontrolledDropdown";
import styles from "./Dropdown.module.css";

export function DropdownListItem({ children }) {
  return (
    <div className={styles.listItem}>
      <label className={styles.item}>{children}</label>
    </div>
  );
}

export function DropdownSingleItem({ children }) {
  return <div className={styles.singleItem}>{children}</div>;
}

export function DropdownItemDivider() {
  return <div className={styles.itemDivider} />;
}

function Dropdown({
  className,
  title,
  trigger,
  isActive,
  setIsActive,
  children,
}) {
  if (setIsActive) {
    return (
      <ControlledDropdown
        className={className}
        title={title}
        trigger={trigger}
        isActive={isActive}
        setIsActive={setIsActive}
      >
        {children}
      </ControlledDropdown>
    );
  }
  return (
    <UncontrolledDropdown className={className} title={title} trigger={trigger}>
      {children}
    </UncontrolledDropdown>
  );
}

export default Dropdown;
