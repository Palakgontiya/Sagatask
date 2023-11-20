import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/root.saga";

import myUsersSlice from "./slice";

const sagaMiddleware = createSagaMiddleware();

const myStore = configureStore({
  reducer: { myUsersReducer: myUsersSlice },
  middleware: (current) => current({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default myStore;
