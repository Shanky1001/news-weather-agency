import { createSlice } from "@reduxjs/toolkit";

// Define an object with keys and values as strings
type StringObject = Record<string, string>;

interface weatherType {
  weathers: string[];
  todaysWeather: StringObject;
}

const initialState: weatherType = {
  weathers: [],
  todaysWeather: {},
};

export const WeatherSlice = createSlice({
  name: "weather slice",
  initialState,
  reducers: {
    addWeathers: (state, action) => {
      state.weathers = [...state.weathers, ...action.payload];
    },
    addTodaysWeather: (state, action) => {
      state.todaysWeather = { ...action.payload };
    },
  },
});

export const { addWeathers, addTodaysWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;
