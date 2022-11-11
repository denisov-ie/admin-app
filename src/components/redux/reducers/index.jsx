import { combineReducers } from "redux";
import filters from "components/redux/slices/filterSlice";
import orders from "components/redux/slices/orderSlice";
import sort from "components/redux/slices/sortSlice";
import pagination from "components/redux/slices/paginationSlice";

const reducers = combineReducers({
  filters,
  orders,
  sort,
  pagination,
});

export default reducers;
