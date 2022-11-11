import { createSlice } from "@reduxjs/toolkit";
import { SORT_DIRECTION as sort } from "components/shared/Table";

export const initialState = {
  sortableColumn: "",
  sortDirection: sort.ascending,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortableColumn(state, action) {
      const { sortableColumn, sortDirection } = action.payload;
      state.sortableColumn = sortableColumn;
      state.sortDirection = sortDirection;
      return state;
    },
    clearSortParams(state) {
      state = initialState;
      return state;
    },
  },
});

export const { setSortableColumn, clearSortParams } = sortSlice.actions;
export default sortSlice.reducer;
