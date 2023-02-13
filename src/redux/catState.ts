import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CatsState } from "../types";

const initialState: CatsState = {
  cats: [],
  isLoading: false,
  error: null,
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getCatsSuccess: (state, action: PayloadAction<Record<string, any>[]>) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatsFallure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCatsFallure, getCatsStart, getCatsSuccess } =
  catSlice.actions;

export default catSlice.reducer;
