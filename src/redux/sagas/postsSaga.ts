import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { getPostsSuccess, getPostsError } from "../reducers/postsSlice";
import { JSON_PLACEHOLEDR_API } from "../../constants";
import { Post } from "../../types";

const ERR_MSG_DEFAULT = "Failed to fetch the posts";
const fetchPosts = () =>
  axios.get<Post[]>(`${JSON_PLACEHOLEDR_API}/posts`).then((res) => res.data);

function* workGetPosts() {
  try {
    const posts: Post[] = yield call(() => fetchPosts());
    yield put(getPostsSuccess(posts));
  } catch (error) {
    const message = error instanceof Error ? error.message : ERR_MSG_DEFAULT;
    yield put(getPostsError(message));
  }
}

export function* postsSaga() {
  yield takeLatest("posts/getPostsStart", workGetPosts);
}
