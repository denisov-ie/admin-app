import classnames from "classnames";
import styles from "./TableRow.module.css";

function TableRow({ className, children }) {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
}

export default TableRow;
