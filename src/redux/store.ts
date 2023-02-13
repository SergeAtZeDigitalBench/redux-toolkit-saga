import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import catsReducer from "./catState";
import catSaga from "./catSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([sagaMiddleware]);
  },
});

sagaMiddleware.run(catSaga);

export default store;
