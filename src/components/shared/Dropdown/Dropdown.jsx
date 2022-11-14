import classnames from "classnames";
import { cloneElement, useEffect, useRef, useState } from "react";
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

function Dropdown({ className, title, trigger, outerState, children }) {
  const baseClassNames = classnames(styles.dropdown, className);

  let [isActive, setIsActive] = useState(false);

  if (outerState) {
    [isActive, setIsActive] = outerState;
  }

  const triggerRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!triggerRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const modifiedTrigger = cloneElement(trigger, {
    onClick: (e) => {
      e.preventDefault();
      setIsActive(!isActive);
    },
  });

  return (
    <div className={styles._} ref={triggerRef}>
      {modifiedTrigger}
      {isActive && (
        <div className={baseClassNames}>
          {title && <span className={styles.title}>{title}</span>}
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
