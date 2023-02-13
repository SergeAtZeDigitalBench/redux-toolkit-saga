import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Post, PostsState } from "../../types";

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    getPostsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getPostsStart, getPostsSuccess, getPostsError } =
  postsSlice.actions;
export default postsSlice.reducer;
