import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mock from "mocks/ordersMock";
import { STATUSES as status } from "features/OrderPage/modules/Status";

const LOAD_IMITATION_DELAY = 1000;

export const loadOrders = createAsyncThunk("loadOrders", async () => {
  const orders = await new Promise((resolve) => {
    setTimeout(() => resolve(mock), LOAD_IMITATION_DELAY);
  });

  return orders;
});

export const UPDATABLE_FIELDS = {
  status: "status",
  name: "name",
};

const clearOrderIfCanceledStatus = (updatedOrder, field, value) => {
  if (field === UPDATABLE_FIELDS.status && value === status.canceled.value) {
    return { ...updatedOrder, positionCount: 0, amount: 0, products: [] };
  }
  return updatedOrder;
};

const initialState = {
  ordersData: [],
  isLoading: false,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    updateOrder(state, action) {
      const { id, field, value } = action.payload;
      state.ordersData = state.ordersData.map((order) => {
        if (order.id === id) {
          let updatedOrder = { ...order };
          updatedOrder[field] = value;
          updatedOrder = clearOrderIfCanceledStatus(updatedOrder, field, value);
          return updatedOrder;
        }
        return order;
      });

      return state;
    },
    deleteOrders(state, action) {
      const { selectedOrderIds } = action.payload;
      state.ordersData = state.ordersData.filter(
        (order) => !selectedOrderIds.includes(order.id)
      );

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

export const { updateOrder, deleteOrders } = orderSlice.actions;
export default orderSlice.reducer;
