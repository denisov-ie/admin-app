import classnames from "classnames";
import styles from "./Table.module.css";

function Table({ className, children }) {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
}

export default Table;
