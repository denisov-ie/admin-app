import classnames from "classnames";
import styles from "./TableCell.module.css";

function TableHeaderCell({ className, children }) {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
}

export default TableHeaderCell;
