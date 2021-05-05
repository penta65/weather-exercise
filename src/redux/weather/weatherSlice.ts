import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { Weather } from 'src/modals/weather';
import { fetchWeather, fetchForcast } from 'src/services/weather/weather';

export type WeatherState = ReturnType<typeof reducer>;
const initialState: Weather = {
  weather: {},
  forecast: [],
  forecastAll: [],
  weatherLoading: false,
  forcastLoading: false,
  celsiusView: false,
  viewType: 'searchView',
  location: '',
  err: '',
};

const { actions, reducer } = createSlice({
  name: 'weatherData',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setForecastAll: (state, action) => {
      state.forecastAll = action.payload;
    },
    setViewType: (state, action) => {
      state.viewType = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setError: (state, action) => {
      state.err = action.payload;
    },
    setCelsiusView: (state, action) => {
      state.celsiusView = action.payload;
    },
    setWeatherLoading: (state, action) => {
      state.weatherLoading = action.payload;
    },
    setForecastLoading: (state, action) => {
      state.forcastLoading = action.payload;
    },
    setErrorData: (state, action) => {
      state.err = action.payload;
    },
  },
});

export function loadWeather(query: string) {
  return async (dispatch: Dispatch<PayloadAction<Weather>>) => {
    dispatch(actions.setWeatherLoading(true));
    dispatch(actions.setForecastLoading(true));
    fetchForcast(query)
      .then((forecast) => {
        dispatch(actions.setForecast(forecast.forecast));
        dispatch(actions.setForecastAll(forecast.forecastAll));
        dispatch(actions.setForecastLoading(false));
      })
      .catch((err) => {
        dispatch(actions.setError(err.message));
        dispatch(actions.setForecastLoading(false));
      });

    fetchWeather(query)
      .then((weather) => {
        dispatch(actions.setWeather(weather));
        dispatch(actions.setWeatherLoading(false));
        dispatch(actions.setViewType('weatherView'));
      })
      .catch((err) => {
        dispatch(actions.setError(err.message));
        dispatch(actions.setWeatherLoading(false));
      });
  };
}

export const {
  setWeather, setViewType, setLocation, setCelsiusView, setWeatherLoading, setForecastLoading,setErrorData,
} = actions;
export const ViewType = (state: { weather: { viewType: any; }; }) => state.weather.viewType;
export const Location = (state: { weather: { location: any; }; }) => state.weather.location;
export const WeatherValue = (state: { weather: { weather: any; }; }) => state.weather.weather;
export const ForecastValue = (state: { weather: { forecast: any; }; }) => state.weather.forecast;
export const ForecastAll = (state: { weather: { forecastAll: any; }; }) => state.weather.forecastAll;
export const CelsiusView = (state: { weather: { celsiusView : any; }; }) => state.weather.celsiusView;
export const ErrorData = (state: { weather: { err : any; }; }) => state.weather.err;
export const WeatherLoading = (state: { weather: { weatherLoading : boolean; }; }) => state.weather.weatherLoading;
export const ForecastLoading = (state: { weather: { forcastLoading : boolean; }; }) => state.weather.forcastLoading;
export default reducer;
