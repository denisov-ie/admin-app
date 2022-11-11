import filterOrders from "components/utils/filterOrders";
import sortOrders from "components/utils/sortOrders";
import _ from "lodash/array";

export const getSearchFilterField = (state) => state.filters.search;

export const getDateFromFilterField = (state) => state.filters.dateFrom;

export const getDateToFilterField = (state) => state.filters.dateTo;

export const getAmountFromFilterField = (state) => state.filters.amountFrom;

export const getAmountToFilterField = (state) => state.filters.amountTo;

export const getStatusesFilterField = (state) => state.filters.statuses;

export const getSortableColumn = (state) => state.sort.sortableColumn;

export const getSortDirection = (state) => state.sort.sortDirection;

export const getPageNumber = (state) => state.pagination.pageNumber;

export const getOrdersPerPage = (state) => state.pagination.ordersPerPage;

export const getRawOrders = (state) => state.orders.data;

export const getFilteredOrders = (state) =>
  filterOrders(getRawOrders(state))
    .search(getSearchFilterField(state))
    .dateFrom(getDateFromFilterField(state))
    .dateTo(getDateToFilterField(state))
    .amountFrom(getAmountFromFilterField(state))
    .amountTo(getAmountToFilterField(state))
    .statuses(getStatusesFilterField(state))
    .result();

export const getSortedOrders = (state) =>
  sortOrders(
    getFilteredOrders(state),
    getSortableColumn(state),
    getSortDirection(state)
  );

export const getPaginatedOrders = (state) => {
  const chunks = _.chunk(getSortedOrders(state), getOrdersPerPage(state));
  return [chunks[getPageNumber(state)], chunks.length];
};
