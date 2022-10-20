import classnames from "classnames";
import styles from "./Dropdown.module.css";

export function DropdownListItem({ children }) {
  return (
    <div className={styles.dropdown__listItem}>
      <label className={styles.dropdown__item}>{children}</label>
    </div>
  );
}

export function DropdownSingleItem({ children }) {
  return <div className={styles.dropdown__singleItem}>{children}</div>;
}

export function DropdownItemDivider() {
  return <div className={styles.dropdown__itemDivider} />;
}

function Dropdown({ className, title, children }) {
  const classNames = classnames(styles.dropdown, {
    [className]: !!className,
  });

  return (
    <div className={classNames}>
      {title && <span className={styles.dropdown__title}>{title}</span>}
      {children}
    </div>
  );
}

export default Dropdown;
