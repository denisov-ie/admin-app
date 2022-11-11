import {
  SORT_DIRECTION as sort,
  TableHeader,
  TableHeaderCell,
} from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import styles from "components/modules/OrderTable/OrderTable.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSortableColumn } from "components/redux/slices/sortSlice";
import {
  getSortDirection,
  getSortableColumn,
} from "components/redux/selectors";
import { setPageNumber } from "components/redux/slices/paginationSlice";

export const SORTABLE_COLUMNS = {
  date: "date",
  status: "status",
  positionCount: "positionCount",
  amount: "amount",
};

function OrderTableHeader() {
  const dispatch = useDispatch();

  const sortDirection = useSelector(getSortDirection);

  const sortableColumn = useSelector(getSortableColumn);

  const handleSortClick = (column) => {
    dispatch(setPageNumber({ pageNumber: 0 }));
    dispatch(
      setSortableColumn({
        sortableColumn: column,
        sortDirection:
          sortDirection === sort.ascending ? sort.descending : sort.ascending,
      })
    );
  };

  return (
    <TableHeader>
      <TableHeaderCell className={styles.checkbox}>
        <Checkbox />
      </TableHeaderCell>
      <TableHeaderCell className={styles.orderNumber}>#</TableHeaderCell>
      <TableHeaderCell
        className={styles.date}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.date)}
        active={sortableColumn === SORTABLE_COLUMNS.date}
        direction={sortableColumn === SORTABLE_COLUMNS.date && sortDirection}
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.status}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.status)}
        active={sortableColumn === SORTABLE_COLUMNS.status}
        direction={sortableColumn === SORTABLE_COLUMNS.status && sortDirection}
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.positionCount}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.positionCount)}
        active={sortableColumn === SORTABLE_COLUMNS.positionCount}
        direction={
          sortableColumn === SORTABLE_COLUMNS.positionCount && sortDirection
        }
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.amount}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.amount)}
        active={sortableColumn === SORTABLE_COLUMNS.amount}
        direction={sortableColumn === SORTABLE_COLUMNS.amount && sortDirection}
      >
        Сумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.name}>ФИО покупателя</TableHeaderCell>
    </TableHeader>
  );
}

export default OrderTableHeader;
