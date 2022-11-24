import classnames from "classnames";
import { Icon, ICON_TYPE as icon } from "shared/components/Icon";
import { TableCell } from "shared/components/Table";
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
    [styles.direction]: direction === SORT_DIRECTION.ascending,
  });

  return (
    <TableCell className={baseClassNames} onClick={onClick}>
      {children}
      {onClick && direction && (
        <Icon name={icon.vArrow} className={iconClassNames} />
      )}
    </TableCell>
  );
}

export default TableHeaderCell;
