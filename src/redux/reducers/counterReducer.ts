import { createReducer } from "@reduxjs/toolkit";

const initiState = 0;

export const counterReducer = createReducer(initiState, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload,
});
