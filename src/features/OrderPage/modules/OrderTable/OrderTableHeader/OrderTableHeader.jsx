import {
  SORT_DIRECTION as sort,
  TableHeader,
  TableHeaderCell,
} from "shared/components/Table";
import Checkbox from "shared/components/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setSortableColumn } from "features/OrderPage/model/slices/sortSlice";
import {
  getSortDirection,
  getSortableColumn,
  getPaginatedOrders,
  getSelectedOrderIds,
} from "features/OrderPage/model/selectors";
import { setPageNumber } from "features/OrderPage/model/slices/paginationSlice";
import {
  toggleSelection,
  clearSelection,
} from "features/OrderPage/model/slices/selectionSlice";
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

  const selectedOrderIds = useSelector(getSelectedOrderIds);

  const { orders } = useSelector(getPaginatedOrders);

  const handleSortClick = (column) => {
    dispatch(setPageNumber({ pageNumber: 0 }));
    dispatch(clearSelection());
    dispatch(
      setSortableColumn({
        sortableColumn: column,
        sortDirection:
          sortDirection === sort.ascending ? sort.descending : sort.ascending,
      })
    );
  };

  const handleCheckboxChange = ({ target: { checked } }) => {
    if (checked) {
      const uncheckedOrderIds = orders
        .filter((order) => !selectedOrderIds.includes(order.id))
        .map((order) => order.id);
      dispatch(toggleSelection({ ids: uncheckedOrderIds }));
    } else {
      const allIds = orders.map((order) => order.id);
      dispatch(toggleSelection({ ids: allIds }));
    }
  };

  return (
    <TableHeader>
      <TableHeaderCell className={styles.checkbox}>
        <label className={styles.checkboxArea}>
          <Checkbox
            onChange={handleCheckboxChange}
            checked={
              selectedOrderIds.length === orders.length && orders.length > 0
            }
          />
        </label>
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
