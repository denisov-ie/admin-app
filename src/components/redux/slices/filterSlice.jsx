import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
  statuses: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterFields(state, action) {
      const { filters } = action.payload;
      state.search = filters.search;
      state.dateFrom = filters.dateFrom;
      state.dateTo = filters.dateTo;
      state.amountFrom = filters.amountFrom;
      state.amountTo = filters.amountTo;
      state.statuses = filters.statuses;
    },
    clearFilterFields(state) {
      state = initialState;
      return state;
    },
  },
});

export const { setFilterFields, clearFilterFields } = filterSlice.actions;
export default filterSlice.reducer;
