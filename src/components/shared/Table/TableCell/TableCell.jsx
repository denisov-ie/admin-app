import classnames from "classnames";
import styles from "./TableCell.module.css";

export const CELL_TYPE = {
  checkbox: "checkbox",
  orderNumber: "orderNumber",
  date: "date",
  status: "status",
  positionCount: "positionCount",
  amount: "amount",
  name: "name",
};

function TableCell({ className, type, children }) {
  const baseClassNames = classnames(styles._, className, {
    [styles.checkbox]: type === CELL_TYPE.checkbox,
    [styles.orderNumber]: type === CELL_TYPE.orderNumber,
    [styles.date]: type === CELL_TYPE.date,
    [styles.status]: type === CELL_TYPE.status,
    [styles.positionCount]: type === CELL_TYPE.positionCount,
    [styles.amount]: type === CELL_TYPE.amount,
    [styles.name]: type === CELL_TYPE.name,
  });

  return <div className={baseClassNames}>{children}</div>;
}

export default TableCell;
