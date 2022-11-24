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
import styles from "./OrderSpecificationTable.module.css";

function OrderSpecificationTable({ order }) {
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
            Спецификация не содержит позиций
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

export default OrderSpecificationTable;
