import { TableCell, TableRow } from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import { Status } from "components/features/OrderPage/modules/Status";
import setRoubleFormat from "components/shared/utils/setRoubleFormat";
import styles from "../OrderTable.module.css";

function OrderTableRow({ order, onChange, onClick, checked }) {
  return (
    <TableRow checked={checked} onClick={onClick}>
      <TableCell className={styles.checkbox}>
        <Checkbox
          id={order.id}
          name="select"
          onChange={onChange}
          checked={checked}
        />
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
