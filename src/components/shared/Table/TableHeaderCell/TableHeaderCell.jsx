import classnames from "classnames";
import { Icon, ICON_TYPE as icon } from "components/shared/Icon";
import { TableCell } from "components/shared/Table";
import styles from "./TableHeaderCell.module.css";

export const SORT_DIRECTION = {
  ascending: "ascending",
  descending: "descending",
};

function TableHeaderCell({ className, active, direction, onClick, children }) {
  const baseClassNames = classnames(styles._, className, {
    [styles.active]: active,
    [styles.clickable]: onClick,
  });

  const iconClassNames = classnames(styles.icon, {
    [styles.direction]: direction === SORT_DIRECTION.descending,
  });

  return (
    <TableCell className={baseClassNames} onClick={onClick}>
      {children}
      {onClick && <Icon name={icon.vArrow} className={iconClassNames} />}
    </TableCell>
  );
}

export default TableHeaderCell;
