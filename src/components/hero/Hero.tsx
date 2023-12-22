import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodaysWeather } from "../../redux/slice/WeatherSlice";
import { Box, Grid } from "@mui/material";
import { MdOutlineThunderstorm } from "react-icons/md";
import WeatherCard from "../weatherCard/WeatherCard";
import { RootState } from "../../redux/store";
import HotTopicCard from "../hotTopicCard/HotTopicCard";
import moment from "moment";

// const getDataNumber = 5;

function Hero() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=28.5355&lon=77.3910&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      )
      .then((res) => {
        dispatch(addTodaysWeather(res.data));
      })
      .catch((err: unknown) => {
        console.log("Something went wrong", err);
      });
  });

  const { weather, news } = useSelector((state: RootState) => state);

  const date = new Date();
  const currentDate = moment(date).format("dddd Do MMMM YY");

  return (
    <section className="relative pt-8 h-[480px] w-[100%] bg-white">
      <div className="flex relative items-center my-auto space-x-4 justify-between">
        <h2 className="w-[100%] text-4xl font-bold">Hot Topics</h2>
        <h2 className=" w-[100%] flex justify-end text-3xl font-normal">
          {currentDate}
        </h2>
      </div>
      <div className="bg-neutral-500 h-[390px] my-4">
        <div className="flex h-[390px]">
          <div className="grow bg-white">
            {news.news && <HotTopicCard breakingNews={news.news[0]} />}
          </div>
          <div className="w-64 p-4 bg-white">
            <Box
              sx={{
                p: 1,
                bgcolor: "background.default",
                display: "grid",
                height: "80px",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <div>
                    <h2 className="text-start text-2xl font-semibold">
                      {weather.todaysWeather.main?.temp} °C
                    </h2>
                    <h2 className="text-start text-gray-600">
                      {weather.todaysWeather?.name},{" "}
                      {weather.todaysWeather?.sys?.country}
                    </h2>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="items-center">
                    <MdOutlineThunderstorm className="text-6xl" />
                  </div>
                </Grid>
              </Grid>
            </Box>
            <div className="sm:flex-row">
              <WeatherCard wname="Mon" temp="18` 18`" />
              <WeatherCard wname="Tue" temp="18` 14`" />
              <WeatherCard wname="Wed" temp="16` 20`" />
              <WeatherCard wname="Thu" temp="24` 30`" />
              <WeatherCard wname="Fri" temp="22` 15`" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
