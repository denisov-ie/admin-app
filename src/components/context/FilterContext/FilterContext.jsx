import { createContext, useCallback, useMemo, useState } from "react";

export const FilterContext = createContext();

export const FILTER_TYPES = {
  dates: "dates",
  amounts: "amounts",
  statuses: "statuses",
};

export const FILTER_INTERVAL_TYPES = {
  from: "from",
  to: "to",
};

function getDefaultFilters() {
  return {
    dates: {
      from: "",
      to: "",
    },
    amounts: {
      from: "",
      to: "",
    },
    statuses: {
      new: false,
      calculation: false,
      confirmed: false,
      postponed: false,
      executed: false,
      canceled: false,
    },
  };
}

function FilterProvider({ children }) {
  const [filters, setFilters] = useState(getDefaultFilters());

  const handleFilterChange = useCallback(
    ({ target: { checked, value } }, filterType, filterSegment) => {
      filters[filterType][filterSegment] =
        typeof filters[filterType][filterSegment] === "boolean"
          ? checked
          : value;
      const newFilters = { ...filters };
      setFilters(newFilters);
    },
    [filters]
  );

  const handleFilterClear = useCallback(
    (filterType, filterSegment) => {
      filters[filterType][filterSegment] =
        typeof filters[filterType][filterSegment] === "boolean" ? false : "";
      const newFilters = { ...filters };
      setFilters(newFilters);
    },
    [filters]
  );

  const handleClearAllFilters = useCallback(() => {
    setFilters(getDefaultFilters());
  }, []);

  const value = useMemo(
    () => ({
      filters,
      handleFilterChange,
      handleFilterClear,
      handleClearAllFilters,
    }),
    [filters, handleFilterChange, handleFilterClear, handleClearAllFilters]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;
