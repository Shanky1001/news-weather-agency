import React, { useEffect, useState } from "react";
import axios from "axios";
import { JSX } from "react/jsx-runtime";
import { hocChildComponentProps } from "../types";

// Higher Order Component for Infinite Scroll
export const withInfiniteScroll = (
  WrappedComponent: React.FC<hocChildComponentProps>,
  apiEndpoint: string,
  token: string = ""
) => {
  return function InfiniteScrollComponent(props: JSX.IntrinsicAttributes) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = { data: { articles: [] } };
        // const response = await axios.get(`${apiEndpoint}&page=${page}`, {
        //   headers: { "X-Api-Key": token },
        // });
        console.log(response);
        setData({ ...data, ...response.data });
        setPage((prevPage) => prevPage + 1);
      } catch {
        alert("something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData();
      }
    };

    useEffect(() => {
      fetchData(); // Initial data fetch
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <WrappedComponent {...props} data={data} loading={loading} />;
  };
};
