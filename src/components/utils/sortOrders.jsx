import { SORT_DIRECTION as sort } from "components/shared/Table";
import { SORTABLE_COLUMNS as column } from "components/modules/OrderTable/OrderTableHeader";
import { parseDateTimeFromString } from "components/utils/parseDateFromString";

function sortOrders([...orders], sortableColumn, sortDirection) {
  if (sortableColumn.length > 0) {
    orders.sort((a, b) => {
      const k1 =
        sortDirection === sort.descending
          ? a[sortableColumn]
          : b[sortableColumn];
      const k2 =
        sortDirection === sort.descending
          ? b[sortableColumn]
          : a[sortableColumn];
      switch (sortableColumn) {
        case column.positionCount:
        case column.amount: {
          return k1 - k2;
        }
        case column.date: {
          return parseDateTimeFromString(k1) - parseDateTimeFromString(k2);
        }
        case column.status: {
          return k1.localeCompare(k2);
        }
        default:
          return 0;
      }
    });
  }
  return orders;
}

export default sortOrders;
