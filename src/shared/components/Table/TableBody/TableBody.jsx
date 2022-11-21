import classnames from "classnames";
import styles from "./TableBody.module.css";

function TableBody({ className, children }) {
  const baseClassNames = classnames(styles._, className);

  return <div className={baseClassNames}>{children}</div>;
}

export default TableBody;
