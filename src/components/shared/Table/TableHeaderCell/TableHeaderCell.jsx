import classnames from "classnames";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import { TableCell } from "components/shared/Table";
import styles from "./TableHeaderCell.module.css";

function TableHeaderCell({ className, sortable, children }) {
  const baseClassNames = classnames(styles._, className);

  return (
    <TableCell className={baseClassNames}>
      {children}
      {sortable && <Icon name={icon.vArrow} className={styles.icon} />}
    </TableCell>
  );
}

export default TableHeaderCell;
