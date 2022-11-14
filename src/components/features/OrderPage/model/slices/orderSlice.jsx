import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mock from "components/mocks/ordersMock";
import { STATUSES as status } from "components/features/OrderPage/modules/Status";

const LOAD_IMITATION_DELAY = 1000;

export const loadOrders = createAsyncThunk("loadOrders", async () => {
  const orders = await new Promise((resolve) => {
    setTimeout(() => resolve(mock), LOAD_IMITATION_DELAY);
  });
  return orders;
});

const initialState = {
  ordersData: [],
  isLoading: false,
};

export const UPDATABLE_FIELDS = {
  status: "status",
  name: "name",
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrder(state, action) {
      const { id, field, value } = action.payload;
      state.ordersData = state.ordersData.map((order) => {
        if (order.id === id) {
          const updatedOrder = { ...order };
          updatedOrder[field] = value;
          if (
            field === UPDATABLE_FIELDS.status &&
            value === status.canceled.value
          ) {
            updatedOrder.positionCount = 0;
            updatedOrder.amount = 0;
            updatedOrder.products = [];
          }
          return updatedOrder;
        }
        return order;
      });
      return state;
    },
    deleteOrder(state, action) {
      const { id } = action.payload;
      state.ordersData = state.ordersData.filter((order) => order.id !== id);
      return state;
    },
  },
  extraReducers: {
    [loadOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [loadOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ordersData = action.payload;
    },
  },
});

export const { updateOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
