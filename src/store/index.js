import logger from "redux-logger";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
});

export default store;
