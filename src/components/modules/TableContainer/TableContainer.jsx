import TableHeader from "components/shared/Table/TableHeader";
import TableHeaderCell from "components/shared/Table/TableHeaderCell";
import {
  CELL_TYPE as cell,
  TableCell,
} from "components/shared/Table/TableCell";
import Checkbox from "components/shared/Checkbox";
import TableBody from "components/shared/Table/TableBody";
import TableRow from "components/shared/Table/TableRow";
import TableFooter from "components/shared/Table/TableFooter";
import Table from "components/shared/Table";
import { Status, STATUSES as status } from "components/modules/Status";

const PREPARED_STATUSES = {
  new: <Status status={status.new.value} />,
  calculation: <Status status={status.calculation.value} />,
  confirmed: <Status status={status.confirmed.value} />,
  postponed: <Status status={status.postponed.value} />,
  executed: <Status status={status.executed.value} />,
  canceled: <Status status={status.canceled.value} />,
};

function TableContainer({ orders }) {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell type={cell.checkbox}>
          <Checkbox />
        </TableHeaderCell>
        <TableHeaderCell type={cell.orderNumber}>#</TableHeaderCell>
        <TableHeaderCell type={cell.date} sortable>
          Дата
        </TableHeaderCell>
        <TableHeaderCell type={cell.status} sortable>
          Статус
        </TableHeaderCell>
        <TableHeaderCell type={cell.positionCount} sortable>
          Позиций
        </TableHeaderCell>
        <TableHeaderCell type={cell.amount} sortable>
          Сумма
        </TableHeaderCell>
        <TableHeaderCell type={cell.name}>ФИО покупателя</TableHeaderCell>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell type={cell.checkbox}>
              <Checkbox id={order.id} name="order" />
            </TableCell>
            <TableCell type={cell.orderNumber}>{order.orderNumber}</TableCell>
            <TableCell type={cell.date} sortable>
              {order.date}
            </TableCell>
            <TableCell type={cell.status} sortable>
              {PREPARED_STATUSES[order.status]}
            </TableCell>
            <TableCell type={cell.positionCount} sortable>
              {order.positionCount}
            </TableCell>
            <TableCell type={cell.amount} sortable>
              {order.amount.toLocaleString("ru-Ru", {
                style: "currency",
                currency: "RUB",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </TableCell>
            <TableCell type={cell.name}>{order.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter />
    </Table>
  );
}

export default TableContainer;
