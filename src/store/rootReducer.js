import { combineReducers } from "redux";
import filters from "features/OrderPage/model/slices/filterSlice";
import orders from "features/OrderPage/model/slices/orderSlice";
import sort from "features/OrderPage/model/slices/sortSlice";
import pagination from "features/OrderPage/model/slices/paginationSlice";
import selection from "features/OrderPage/model/slices/selectionSlice";

const rootReducer = combineReducers({
  filters,
  orders,
  sort,
  pagination,
  selection,
});

export default rootReducer;
