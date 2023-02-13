import store from "../redux/store";

export type CatsState = {
  cats: Record<string, any>[];
  isLoading: boolean;
  error: null | string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
