import store from "../redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type CounterState = {
  value: number;
  status: string;
};
