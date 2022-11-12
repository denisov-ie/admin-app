import { createSlice } from "@reduxjs/toolkit";
import { SORT_DIRECTION as sort } from "components/shared/Table";
import { SORTABLE_COLUMNS as column } from "components/features/OrderPage/modules/OrderTable/OrderTableHeader";

export const initialState = {
  sortableColumn: column.date,
  sortDirection: sort.descending,
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
    clearSortParams() {
      return initialState;
    },
  },
});

export const { setSortableColumn, clearSortParams } = sortSlice.actions;
export default sortSlice.reducer;
