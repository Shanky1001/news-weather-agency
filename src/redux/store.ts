import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./slice/WeatherSlice";
import NewsSlice from "./slice/NewsSlice";

export const Store = configureStore({
  reducer: {
    weather: WeatherSlice,
    news: NewsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
