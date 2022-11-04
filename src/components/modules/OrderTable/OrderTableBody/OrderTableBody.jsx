import { TableBody, TableCell, TableRow } from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import { Status } from "components/modules/Status";
import convertToRoubles from "components/utils/convertToRoubles";
import styles from "components/modules/OrderTable/OrderTable.module.css";

function OrderTableBody({ orders }) {
  return (
    <TableBody>
      {orders.map((order) => (
        <TableRow key={order.id}>
          <TableCell className={styles.checkbox}>
            <Checkbox id={order.id} name="order" />
          </TableCell>
          <TableCell className={styles.orderNumber}>
            {order.orderNumber}
          </TableCell>
          <TableCell className={styles.date} sortable>
            {order.date}
          </TableCell>
          <TableCell className={styles.status} sortable>
            <Status status={order.status} />
          </TableCell>
          <TableCell className={styles.positionCount} sortable>
            {order.positionCount}
          </TableCell>
          <TableCell className={styles.amount} sortable>
            {convertToRoubles(order.amount)}
          </TableCell>
          <TableCell className={styles.name}>{order.name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default OrderTableBody;
