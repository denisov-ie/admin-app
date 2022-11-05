function convertToRoubles(amount) {
  return amount.toLocaleString("ru-Ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

export default convertToRoubles;
