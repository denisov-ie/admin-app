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

      return { ...filters };
    },
    clearFilterFields() {
      return initialState;
    },
  },
});

export const { setFilterFields, clearFilterFields } = filterSlice.actions;
export default filterSlice.reducer;
