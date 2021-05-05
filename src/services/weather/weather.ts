import mapDataToWeatherInterface from 'src/common/mapDataToWeatherInterface';
import { api } from 'src/common/config';

export function fetchWeather(query:string) {
  return fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then((res) => handleResponse(res))
    .then((weather) => {
      if (Object.entries(weather).length) {
        const mappedData = mapDataToWeatherInterface(weather);
        return mappedData;
      }
    });
}

export function fetchForcast(query:string) {
  return fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
    .then((res) => handleResponse(res))
    .then((result) => {
      if (Object.entries(result).length) {
        const forcastData = {
          forecast: [],
          forecastAll: [],
        };
        const forecast = [];
        const forecastAll = [];
        for (let i = 0; i < result.list.length; i += 8) {
          forecast.push(mapDataToWeatherInterface(result.list[i + 4]));
        }
        for (let i = 0; i < result.list.length; i += 1) {
          forecastAll.push(mapDataToWeatherInterface(result.list[i]));
        }
        forcastData.forecast = forecast;
        forcastData.forecastAll = forecastAll;
        return forcastData;
      }
    });
}

function handleResponse(response: Response) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Error: Location ${response.statusText.toLowerCase()}`);
}
