import classnames from "classnames";
import styles from "./TableFooter.module.css";

function TableFooter({ className, children }) {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
}

export default TableFooter;
