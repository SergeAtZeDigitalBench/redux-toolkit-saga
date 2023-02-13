import { configureStore } from "@reduxjs/toolkit";
import configureSagaMiddleware from "redux-saga";

import postsReducer from "./reducers/postsSlice";
import rootSaga from "./sagas";

const sagaMiddleware = configureSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export default store;
