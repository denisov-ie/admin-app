import classnames from "classnames";
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

function Dropdown({ className, title, children }) {
  const baseClassNames = classnames(styles._, {
    [className]: !!className,
  });

  return (
    <div className={baseClassNames}>
      {title && <span className={styles.title}>{title}</span>}
      {children}
    </div>
  );
}

export default Dropdown;
