import { call, put, takeEvery } from "redux-saga/effects";

import { getCatsSuccess, getCatsFallure } from "./catState";

const ERR_MSG_DEFAULT = "Failed fetch cats";

const fetchCatsList = () =>
  fetch("https://api.thecatapi.com/v1/breeds").then((res) => {
    if (!res.ok) {
      throw new Error(ERR_MSG_DEFAULT);
    }
    return res.json();
  });

function* workGetCats() {
  try {
    const cats: Record<string, any>[] = yield call(() => fetchCatsList());
    const catsList = cats.slice(0, 10);
    yield put(getCatsSuccess(catsList));
  } catch (error) {
    const message = error instanceof Error ? error.message : ERR_MSG_DEFAULT;
    yield put(getCatsFallure(message));
  }
}

function* catsSaga() {
  yield takeEvery("cats/getCatsStart", workGetCats);
}

export default catsSaga;
