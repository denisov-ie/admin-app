import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedOrderIds: [],
  openedOrderId: null,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setOpenedOrderId(state, action) {
      const { id } = action.payload;
      state.openedOrderId = id;

      return state;
    },
    toggleSelection(state, action) {
      const { ids } = action.payload;
      for (const id of ids) {
        if (state.selectedOrderIds.includes(id)) {
          state.selectedOrderIds = state.selectedOrderIds.filter(
            (item) => item !== id
          );
        } else {
          state.selectedOrderIds.push(id);
        }
      }

      return state;
    },
    clearSelection() {
      return initialState;
    },
  },
});

export const { setOpenedOrderId, toggleSelection, clearSelection } =
  selectionSlice.actions;
export default selectionSlice.reducer;
