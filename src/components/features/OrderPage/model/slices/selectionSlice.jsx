import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedOrderIds: [],
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    addToSelection(state, action) {
      const { id } = action.payload;
      state.selectedOrderIds.push(id);
      return state;
    },
    removeFromSelection(state, action) {
      const { id } = action.payload;
      state.selectedOrderIds = state.selectedOrderIds.filter(
        (item) => item !== id
      );
      return state;
    },
    clearSelection() {
      return initialState;
    },
  },
});

export const { addToSelection, removeFromSelection, clearSelection } =
  selectionSlice.actions;
export default selectionSlice.reducer;
