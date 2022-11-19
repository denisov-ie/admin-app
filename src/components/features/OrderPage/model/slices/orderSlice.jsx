import { createSlice } from "@reduxjs/toolkit";
import mock from "components/mocks/ordersMock";

const initialState = mock;

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
