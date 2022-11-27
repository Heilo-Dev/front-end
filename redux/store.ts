import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./slices/apiSlice";
import counterReducer from "./slices/counterSlice";
import useReducer from "./slices/userSlice";
import useApi from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
    api: useApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
