import { TableHeader, TableHeaderCell } from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import styles from "components/modules/OrderTable/OrderTable.module.css";

function OrderTableHeader() {
  return (
    <TableHeader>
      <TableHeaderCell className={styles.checkbox}>
        <Checkbox />
      </TableHeaderCell>
      <TableHeaderCell className={styles.orderNumber}>#</TableHeaderCell>
      <TableHeaderCell className={styles.date} sortable>
        Дата
      </TableHeaderCell>
      <TableHeaderCell className={styles.status} sortable>
        Статус
      </TableHeaderCell>
      <TableHeaderCell className={styles.positionCount} sortable>
        Позиций
      </TableHeaderCell>
      <TableHeaderCell className={styles.amount} sortable>
        Сумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.name}>ФИО покупателя</TableHeaderCell>
    </TableHeader>
  );
}

export default OrderTableHeader;
