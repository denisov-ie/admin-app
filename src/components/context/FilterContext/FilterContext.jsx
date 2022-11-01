import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FILTER_TYPES = {
  search: "search",
  dateFrom: "dateFrom",
  dateTo: "dateTo",
  amountFrom: "amountFrom",
  amountTo: "amountTo",
  statuses: "statuses",
};

const initialState = () => ({
  search: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
  statuses: {
    new: false,
    calculation: false,
    confirmed: false,
    postponed: false,
    executed: false,
    canceled: false,
  },
});

function FilterProvider({ children }) {
  const [filters, setFilters] = useState(initialState);

  const handleFilterChange = (
    { target: { checked, value } },
    filterType,
    filterSegment
  ) => {
    if (filterSegment) {
      filters[filterType][filterSegment] = checked;
    } else {
      filters[filterType] = value;
    }
    const newFilters = { ...filters };
    setFilters(newFilters);
  };

  const handleFilterClear = (filterType, filterSegment) => {
    if (filterSegment) {
      filters[filterType][filterSegment] = false;
    } else {
      filters[filterType] = "";
    }
    const newFilters = { ...filters };
    setFilters(newFilters);
  };

  const handleClearAllFilters = () => setFilters(initialState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    filters,
    handleFilterChange,
    handleFilterClear,
    handleClearAllFilters,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;
