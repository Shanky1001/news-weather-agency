import { createSlice } from "@reduxjs/toolkit";

interface NewsType {
  news: string[];
}
const initialState: NewsType = {
  news: [],
};

export const NewsSlice = createSlice({
  name: "news slice",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.news = [...state.news, action.payload];
    },
  },
});

export const { addNews } = NewsSlice.actions;
export default NewsSlice.reducer;
