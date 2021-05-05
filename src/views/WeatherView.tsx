import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ViewType } from 'src/redux/weather/weatherSlice';
import WeatherCard from 'src/components/weather/WeatherCard';
import Search from 'src/components/weather/Search';

function WeatherView() {
  const view = useSelector(ViewType);
  const [currentView, setCurrentView] = useState(view);
  useEffect(() => {
    setCurrentView(view);
  }, [view]);
  return (
    <>
      {currentView === 'searchView' && <Search />}
      {currentView === 'weatherView' && <WeatherCard />}
    </>
  );
}

export default WeatherView;
