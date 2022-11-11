import { TableBody, TableCell, TableRow } from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import { Status } from "components/modules/Status";
import setRoubleFormat from "components/utils/setRoubleFormat";
import styles from "components/modules/OrderTable/OrderTable.module.css";
import { useSelector } from "react-redux";
import { getPaginatedOrders } from "components/redux/selectors";

function OrderTableBody() {
  const orders = useSelector(getPaginatedOrders)[0];

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
      ))}
    </TableBody>
  );
}

export default OrderTableBody;
