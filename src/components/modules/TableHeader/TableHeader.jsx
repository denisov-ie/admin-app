import TableHeaderCell from "../TableHeaderCell/TableHeaderCell";
import Checkbox from "../../shared/Checkbox/Checkbox";
import TableRow from "../TableRow/TableRow";

function TableHeader() {
  return (
    <TableRow>
      <TableHeaderCell>
        <Checkbox />
      </TableHeaderCell>
      <TableHeaderCell>#</TableHeaderCell>
      <TableHeaderCell sortable>Дата</TableHeaderCell>
      <TableHeaderCell sortable>Статус</TableHeaderCell>
      <TableHeaderCell sortable>Позиций</TableHeaderCell>
      <TableHeaderCell sortable>Сумма</TableHeaderCell>
      <TableHeaderCell>ФИО покупателя</TableHeaderCell>
    </TableRow>
  );
}

export default TableHeader;
