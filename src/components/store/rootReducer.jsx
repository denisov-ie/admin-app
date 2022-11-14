import { combineReducers } from "redux";
import filters from "components/features/OrderPage/model/slices/filterSlice";
import orders from "components/features/OrderPage/model/slices/orderSlice";
import sort from "components/features/OrderPage/model/slices/sortSlice";
import pagination from "components/features/OrderPage/model/slices/paginationSlice";
import selection from "components/features/OrderPage/model/slices/selectionSlice";

const rootReducer = combineReducers({
  filters,
  orders,
  sort,
  pagination,
  selection,
});

export default rootReducer;
