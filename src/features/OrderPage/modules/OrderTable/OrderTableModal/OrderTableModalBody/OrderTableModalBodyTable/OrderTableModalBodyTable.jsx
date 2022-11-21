import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "shared/components/Table";
import setRoubleFormat from "shared/utils/setRoubleFormat";
import styles from "./OrderTableModalBodyTable.module.css";

function OrderTableModalBodyTable({ order }) {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell className={styles.article}>Артикул</TableHeaderCell>
        <TableHeaderCell className={styles.name}>Наименование</TableHeaderCell>
        <TableHeaderCell className={styles.price}>Цена</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {order.products.length === 0 && (
          <TableRow className={styles.canceled}>
            В заказе отсутствуют товары
          </TableRow>
        )}
        {order.products.map((product) => (
          <TableRow key={product.article}>
            <TableCell className={styles.article}>{product.article}</TableCell>
            <TableCell className={styles.name}>{product.name}</TableCell>
            <TableCell className={styles.price}>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className={styles.tableFooter}>
        <span className={styles.amount}>Итоговая сумма:</span>
        {setRoubleFormat(order.amount)}
      </TableFooter>
    </Table>
  );
}

export default OrderTableModalBodyTable;
