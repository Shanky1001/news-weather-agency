import React, { useEffect } from "react";
import { withInfiniteScroll } from "../../hoc/withInfiniteScroll";
import { hocChildComponentProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addNews } from "../../redux/slice/NewsSlice";

const News: React.FC<hocChildComponentProps> = ({ data, loading }) => {
  const dispatch = useDispatch();
  const NewsState = useSelector((state: RootState) => state.news);
//   useEffect(() => {
//     dispatch(addNews(data));
//   }, [data]);
  return <div>{loading ? "Loading...." : JSON.stringify(data)}</div>;
};

export const NewsWithInfiniteScroll = withInfiniteScroll(
  News,
  "https://newsapi.org/v2/top-headlines?country=us",
  import.meta.env.VITE_NEWS_API_KEY
);
