import {
  SORT_DIRECTION as sort,
  TableHeader,
  TableHeaderCell,
} from "components/shared/Table";
import Checkbox from "components/shared/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setSortableColumn } from "components/features/OrderPage/model/slices/sortSlice";
import {
  getSortDirection,
  getSortableColumn,
} from "components/features/OrderPage/model/selectors";
import { setPageNumber } from "components/features/OrderPage/model/slices/paginationSlice";
import styles from "../OrderTable.module.css";

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
        direction={
          (sortableColumn === SORTABLE_COLUMNS.date && sortDirection) ||
          sort.descending
        }
      >
        Дата
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.status}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.status)}
        active={sortableColumn === SORTABLE_COLUMNS.status}
        direction={
          (sortableColumn === SORTABLE_COLUMNS.status && sortDirection) ||
          sort.descending
        }
      >
        Статус
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.positionCount}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.positionCount)}
        active={sortableColumn === SORTABLE_COLUMNS.positionCount}
        direction={
          (sortableColumn === SORTABLE_COLUMNS.positionCount &&
            sortDirection) ||
          sort.descending
        }
      >
        Позиций
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.amount}
        onClick={() => handleSortClick(SORTABLE_COLUMNS.amount)}
        active={sortableColumn === SORTABLE_COLUMNS.amount}
        direction={
          (sortableColumn === SORTABLE_COLUMNS.amount && sortDirection) ||
          sort.descending
        }
      >
        Сумма
      </TableHeaderCell>
      <TableHeaderCell className={styles.name}>ФИО покупателя</TableHeaderCell>
    </TableHeader>
  );
}

export default OrderTableHeader;
