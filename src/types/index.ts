import store from "../redux/store";

export type RootState = ReturnType<typeof store.getState>;

export type SliceState<D> = {
  data: D;
  loading: boolean;
  error: null | string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsState = SliceState<Post[]>;
