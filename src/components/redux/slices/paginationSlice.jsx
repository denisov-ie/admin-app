import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  pageNumber: 0,
  ordersPerPage: 20,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageNumber(state, action) {
      const { pageNumber } = action.payload;
      state.pageNumber = pageNumber;
      return state;
    },
  },
});

export const { setPageNumber } = paginationSlice.actions;
export default paginationSlice.reducer;
