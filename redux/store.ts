import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./slices/editorSlice";
export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
