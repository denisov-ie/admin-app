import { TableCell, TableRow } from "shared/components/Table";
import Checkbox from "shared/components/Checkbox";
import { Status } from "features/OrderPage/modules/Status";
import setRoubleFormat from "shared/utils/setRoubleFormat";
import styles from "../OrderTable.module.css";

function OrderTableRow({ order, onChange, onClick, checked, expanded }) {
  return (
    <TableRow highlighted={checked || expanded} onClick={onClick}>
      <TableCell className={styles.checkbox}>
        <label className={styles.checkboxArea}>
          <Checkbox
            id={order.id}
            name="select"
            onChange={onChange}
            checked={checked}
          />
        </label>
      </TableCell>
      <TableCell className={styles.orderNumber}>{order.orderNumber}</TableCell>
      <TableCell className={styles.date}>{order.date}</TableCell>
      <TableCell className={styles.status}>
        <Status status={order.status} />
      </TableCell>
      <TableCell className={styles.positionCount}>
        {order.positionCount === 0 ? "-" : order.positionCount}
      </TableCell>
      <TableCell className={styles.amount}>
        {order.amount === 0 ? "-" : setRoubleFormat(order.amount)}
      </TableCell>
      <TableCell className={styles.name}>{order.name}</TableCell>
    </TableRow>
  );
}

export default OrderTableRow;
