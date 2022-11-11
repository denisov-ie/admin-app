import { parseDateFromString } from "components/utils/parseDateFromString";

function filterOrders(orders) {
  return {
    search(search) {
      const numberPattern = /^\d*$/;
      const namePattern = /^[А-Яа-яЁё -]*$/;
      if (search) {
        if (numberPattern.test(search)) {
          orders = orders.filter((item) =>
            String(item.orderNumber)
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        } else if (namePattern.test(search)) {
          orders = orders.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }
      return this;
    },
    dateFrom(dateFrom) {
      orders = dateFrom
        ? orders.filter(
            (item) =>
              parseDateFromString(item.date) >= parseDateFromString(dateFrom)
          )
        : orders;
      return this;
    },
    dateTo(dateTo) {
      orders = dateTo
        ? orders.filter(
            (item) =>
              parseDateFromString(item.date) <= parseDateFromString(dateTo)
          )
        : orders;
      return this;
    },
    amountFrom(amountFrom) {
      orders = amountFrom
        ? orders.filter((item) => item.amount >= amountFrom)
        : orders;
      return this;
    },
    amountTo(amountTo) {
      orders = amountTo
        ? orders.filter((item) => item.amount <= amountTo)
        : orders;
      return this;
    },
    statuses(checkedStatuses = []) {
      orders =
        checkedStatuses.length > 0
          ? orders.filter((item) => checkedStatuses.includes(item.status))
          : orders;
      return this;
    },
    result() {
      return orders;
    },
  };
}

export default filterOrders;
