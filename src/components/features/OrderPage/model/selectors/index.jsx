import { chunk } from "lodash/array";
import {
  compareDates,
  compareNumbers,
  compareStrings,
} from "components/shared/utils/compareValue";
import {
  isDateInRange,
  isItemInArray,
  isNumberInRange,
  isStringStartsWithSubstring,
  isSubstringInString,
} from "components/shared/utils/checkValueInRange";
import { parseDateFromString } from "components/shared/utils/parseDateFromString";

const SORT_MAP = {
  positionCount: compareNumbers,
  amount: compareNumbers,
  date: compareDates,
  status: compareStrings,
};

const ORDERS_PER_PAGE = 20;

export const getSearchFilterField = (state) => state.filters.search;

export const getDateFromFilterField = (state) => state.filters.dateFrom;

export const getDateToFilterField = (state) => state.filters.dateTo;

export const getAmountFromFilterField = (state) => state.filters.amountFrom;

export const getAmountToFilterField = (state) => state.filters.amountTo;

export const getStatusesFilterField = (state) => state.filters.statuses;

export const getSortableColumn = (state) => state.sort.sortableColumn;

export const getSortDirection = (state) => state.sort.sortDirection;

export const getPageNumber = (state) => state.pagination.pageNumber;

export const getRawOrders = (state) => state.orders;

export const getFilteredOrders = (state) => {
  const isEveryCheckTrue = (filters) =>
    filters.every((filter) => filter === true);
  const dateCheck = isDateInRange(
    parseDateFromString(getDateFromFilterField(state)),
    parseDateFromString(getDateToFilterField(state))
  );
  const amountCheck = isNumberInRange(
    getAmountFromFilterField(state),
    getAmountToFilterField(state)
  );
  const statusCheck = isItemInArray(getStatusesFilterField(state));
  const searchCheck = (orderNumber, name) =>
    isStringStartsWithSubstring(getSearchFilterField(state), orderNumber) ||
    isSubstringInString(getSearchFilterField(state), name);
  const orders = [...getRawOrders(state)];
  return orders.filter(({ orderNumber, name, date, amount, status }) =>
    isEveryCheckTrue([
      dateCheck(parseDateFromString(date)),
      amountCheck(amount),
      searchCheck(String(orderNumber), name),
      statusCheck(status),
    ])
  );
};

export const getSortedOrders = (state) => {
  const orders = [...getFilteredOrders(state)];
  return orders.sort((v1, v2) =>
    SORT_MAP[getSortableColumn(state)](
      v1[getSortableColumn(state)],
      v2[getSortableColumn(state)],
      getSortDirection(state)
    )
  );
};

export const getPaginatedOrders = (state) => {
  const chunks = chunk(getSortedOrders(state), ORDERS_PER_PAGE);
  return {
    orders: chunks[getPageNumber(state)] || [],
    pageCount: chunks.length,
  };
};
