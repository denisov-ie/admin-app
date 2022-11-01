import { TableBody, TableCell, TableRow } from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import { Status, STATUSES as status } from "components/modules/Status";
import styles from "components/modules/OrderTable/OrderTable.module.css";

const PREPARED_STATUSES = {
  new: <Status status={status.new.value} />,
  calculation: <Status status={status.calculation.value} />,
  confirmed: <Status status={status.confirmed.value} />,
  postponed: <Status status={status.postponed.value} />,
  executed: <Status status={status.executed.value} />,
  canceled: <Status status={status.canceled.value} />,
};

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
            {PREPARED_STATUSES[order.status]}
          </TableCell>
          <TableCell className={styles.positionCount} sortable>
            {order.positionCount}
          </TableCell>
          <TableCell className={styles.amount} sortable>
            {order.amount.toLocaleString("ru-Ru", {
              style: "currency",
              currency: "RUB",
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </TableCell>
          <TableCell className={styles.name}>{order.name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default OrderTableBody;
