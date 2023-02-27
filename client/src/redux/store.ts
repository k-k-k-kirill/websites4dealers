import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import notification from "./notification/slice";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    notification,
  },
  middleware: [saga],
  devTools: process.env.NODE_ENV !== "production",
});

saga.run(rootSaga);
