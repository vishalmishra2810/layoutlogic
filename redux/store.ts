import { configureStore } from "@reduxjs/toolkit";
import selectQuestionReducer from "./slices/selectQuestionSlice";

export const store = configureStore({
  reducer: {
    selectQuestion: selectQuestionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
