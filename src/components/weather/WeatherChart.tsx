import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { ForecastAll } from 'src/redux/weather/weatherSlice';
import toCelsius from 'src/common/toCelsius';

interface Props {
  activeItem: number;
  weatherDataType: boolean;
  activeDate:any,
}
function WeatherChart(props: Props) {
  const { weatherDataType, activeDate } = props;
  const [data2, setData] = useState([]);
  const forecastData = useSelector(ForecastAll);
  let chartData = [];
  useEffect(() => {
    console.log(dayjs(activeDate).get('date'),forecastData,"date")
    chartData = forecastData.filter(
      (item: any, index: number) => dayjs(item.dt_txt).get('date') == dayjs(activeDate).get('date'),
    );
    const arr = [];
    chartData.map((data: { temperature: number; max: number; dt_txt: string | number | Date | dayjs.Dayjs | undefined; }) => arr.push({
      temperature: weatherDataType
        ? Math.round(toCelsius(data.temperature))
        : Math.round(data.max),
      time: dayjs(data.dt_txt).format('HH:mm'),
    }));

    setData(arr);
  }, [props.activeItem, props.activeDate,props.weatherDataType]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={150}
        height={140}
        data={data2}
        margin={{
          top: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#5fdaff" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WeatherChart;
