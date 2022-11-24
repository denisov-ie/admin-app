import { chunk } from "lodash/array";
import {
  compareDates,
  compareNumbers,
  compareStrings,
} from "shared/utils/compareValue";
import {
  isDateInRange,
  isItemInArray,
  isNumberInRange,
  isStringStartsWithSubstring,
  isSubstringInString,
} from "shared/utils/checkValueInRange";
import { parseDateFromString } from "shared/utils/parseDateFromString";
import { createSelector } from "@reduxjs/toolkit";

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

export const getOrdersIsLoading = (state) => state.orders.isLoading;

export const getRawOrders = (state) => state.orders.ordersData;

export const getSelectedOrderIds = (state) => state.selection.selectedOrderIds;

export const getOpenedOrderId = (state) => state.selection.openedOrderId;

export const getFilteredOrders = createSelector(
  [
    getRawOrders,
    getDateFromFilterField,
    getDateToFilterField,
    getAmountFromFilterField,
    getAmountToFilterField,
    getStatusesFilterField,
    getSearchFilterField,
  ],
  (orders, dateFrom, dateTo, amountFrom, amountTo, statuses, search) => {
    const isEveryCheckTrue = (filters) =>
      filters.every((filter) => filter === true);

    const dateCheck = isDateInRange(
      parseDateFromString(dateFrom),
      parseDateFromString(dateTo)
    );

    const amountCheck = isNumberInRange(amountFrom, amountTo);

    const statusCheck = isItemInArray(statuses);

    const searchCheck = (orderNumber, name) =>
      isStringStartsWithSubstring(search, orderNumber) ||
      isSubstringInString(search, name);

    return orders.filter(({ orderNumber, name, date, amount, status }) =>
      isEveryCheckTrue([
        dateCheck(parseDateFromString(date)),
        amountCheck(amount),
        searchCheck(String(orderNumber), name),
        statusCheck(status),
      ])
    );
  }
);

export const getSortedOrders = (state) => {
  const orders = getFilteredOrders(state);
  const sortableColumn = getSortableColumn(state);
  const sortDirection = getSortDirection(state);
  const comparator = SORT_MAP[sortableColumn];
  orders.sort((v1, v2) =>
    comparator(v1[sortableColumn], v2[sortableColumn], sortDirection)
  );

  return [...orders];
};

export const getPaginatedOrders = (state) => {
  const orders = getSortedOrders(state);
  const pageNumber = getPageNumber(state);
  const chunks = chunk(orders, ORDERS_PER_PAGE);

  return {
    orders: chunks[pageNumber] || [],
    pageCount: chunks.length,
  };
};

export const getOrdersBySelectedIds = (state) => {
  const { orders } = getPaginatedOrders(state);
  const selectedOrderIds = getSelectedOrderIds(state);

  return orders.filter((order) => selectedOrderIds.includes(order.id));
};

export const getOpenedOrder = (state) => {
  const { orders } = getPaginatedOrders(state);
  const orderId = getOpenedOrderId(state);

  return orders.find((order) => orderId === order.id);
};
