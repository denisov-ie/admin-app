import { parseDateTimeFromString } from "shared/utils/parseDateFromString";

export const compareDates = (v1, v2, compareDirection) =>
  (compareDirection === "ascending" ? 1 : -1) *
  (parseDateTimeFromString(v1) - parseDateTimeFromString(v2));

export const compareNumbers = (v1, v2, compareDirection) =>
  (compareDirection === "ascending" ? 1 : -1) * (v1 - v2);

export const compareStrings = (v1, v2, compareDirection) =>
  compareDirection === "ascending"
    ? v1.localeCompare(v2)
    : v2.localeCompare(v1);
