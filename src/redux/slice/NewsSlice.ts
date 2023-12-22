import { createSlice } from "@reduxjs/toolkit";

interface NewsType {
  news: string[];
  loading: boolean;
}
const initialState: NewsType = {
  news: [],
  loading: false,
};

export const NewsSlice = createSlice({
  name: "news slice",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.news = [...state.news, action.payload];
    },
    setNewsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addNews,setNewsLoading } = NewsSlice.actions;
export default NewsSlice.reducer;
