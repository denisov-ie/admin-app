import { TableRow } from "components/shared/Table";
import classnames from "classnames";
import styles from "./TableFooter.module.css";

function TableFooter({ className, children }) {
  const baseClassNames = classnames(styles._, className);

  return <TableRow className={baseClassNames}>{children}</TableRow>;
}

export default TableFooter;
