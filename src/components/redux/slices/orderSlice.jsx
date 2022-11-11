import { createSlice } from "@reduxjs/toolkit";
import mock from "components/mocks/ordersMock200Records";

const initialState = {
  data: mock,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
