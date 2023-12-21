import { createSlice } from "@reduxjs/toolkit";

interface weatherType {
  weather: string[];
}

const initialState: weatherType = {
  weather: [],
};

export const WeatherSlice = createSlice({
  name: "weather slice",
  initialState,
  reducers: {
    addWeather: (state, action) => {
      state.weather = [...state.weather, ...action.payload];
    },
  },
});

export const { addWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;
