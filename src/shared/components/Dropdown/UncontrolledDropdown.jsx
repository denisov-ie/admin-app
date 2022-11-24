import classnames from "classnames";
import { cloneElement, useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";

function UncontrolledDropdown({ className, title, trigger, children }) {
  const baseClassNames = classnames(styles.dropdown, className);

  const [isActive, setIsActive] = useState(false);

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

export default UncontrolledDropdown;
