import { TableBody, TableCell, TableRow } from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import { Status } from "components/features/OrderPage/modules/Status";
import setRoubleFormat from "components/shared/utils/setRoubleFormat";
import { useSelector } from "react-redux";
import { getPaginatedOrders } from "components/features/OrderPage/model/selectors";
import styles from "../OrderTable.module.css";

function OrderTableBody() {
  const { orders } = useSelector(getPaginatedOrders);

  return (
    <TableBody>
      {orders.length === 0 && (
        <div className={styles.message}>
          По вашему запросу ничего не найдено
        </div>
      )}
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
