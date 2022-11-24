export const isNumberInRange = (min, max) => (value) =>
  value >= (min || Number.MIN_SAFE_INTEGER) &&
  value <= (max || Number.MAX_SAFE_INTEGER);

export const isDateInRange = (min, max) => (value) => {
  if (!min && !max) {
    return true;
  }
  if (!min) {
    return value <= max;
  }
  if (!max) {
    return value >= min;
  }

  return value >= min && value <= max;
};

export const isSubstringInString = (substring, string) =>
  string.toLowerCase().includes(substring.toLowerCase());

export const isStringStartsWithSubstring = (substring, string) =>
  string.toLowerCase().startsWith(substring.toLowerCase());

export const isItemInArray = (array) => (item) => {
  if (!array || array.length === 0) return true;

  return array.includes(item);
};
