function mapDataToWeatherInterface(data:any) {
  const mapped = {
    main: data.main,
    city: data.name,
    country: data.sys.country,
    date: data.dt,
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: data.main.temp,
    description: data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod,
    dt_txt: null,
    icon: null,
    max: null,
    min: null,
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = data.main.temp_max;
    mapped.min = data.main.temp_min;
  }

  // remove undefined fields
  Object.keys(mapped).forEach(
    (key) => mapped[key] === undefined && delete data[key],
  );

  return mapped;
}

export default mapDataToWeatherInterface;
