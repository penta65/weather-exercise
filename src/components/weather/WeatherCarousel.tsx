import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import { ForecastValue, WeatherValue, setViewType } from 'src/redux/weather/weatherSlice';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import getWeatherIcon from 'src/common/getWeatherIcon';
import Button from '@material-ui/core/Button';

import styles from 'src/assets/styles/styles';
import toCelsius from 'src/common/toCelsius';
import WeatherForecast from './WeatherForecast';

const WeatherCarousel = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dispatch = useDispatch();
  const weatherData = useSelector(WeatherValue);
  const forecastData = useSelector(ForecastValue);
  const [weather, setWeatherData] = useState(weatherData);
  const [forecast, setForecastData] = useState(forecastData);
  useEffect(() => {
    setWeatherData(weatherData);
  }, [weatherData]);

  useEffect(() => {
    setForecastData(forecastData);
  }, [forecastData]);
  const { weatherDataType } = props;
  //   const { weather, forecast } = props;

  function backPage() {
    dispatch(setViewType('searchView'));
  }
  return (
    <Box>
      {typeof weather.main !== 'undefined' ? (
        <>
          <Box className={classes.container}>
            <CardContent className={classes.root}>
              <Grid container spacing={4} justify="center">
                <Grid lg={4}>
                  <CardMedia
                    className={classes.icon}
                    image={getWeatherIcon(weather.description)}
                    width="500px"
                  />
                </Grid>
                <Grid item lg={4}>
                  <Box className={classes.details}>
                    <Typography variant="h2">
                      {weatherDataType
                        ? `${Math.round(toCelsius(weather.temperature))}°C`
                        : `${Math.round(weather.temperature)}°F`}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {weather.city}
                      ,
                      {weather.country}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4}>
                  <Box className={classes.details2}>
                    <Typography variant="subtitle1">
                      Min:
                      {' '}
                      {weatherDataType
                        ? `${Math.round(toCelsius(weather.min))}°C`
                        : `${Math.round(weather.min)}°F`}

                    </Typography>
                    <Typography variant="subtitle1">
                      Max:
                      {' '}
                      {weatherDataType
                        ? `${Math.round(toCelsius(weather.max))}°C`
                        : `${Math.round(weather.max)}°F`}
                    </Typography>
                    <Typography variant="subtitle1">
                      Wind Speed:
                      {' '}
                      {Math.round(weather.wind_speed)}
                      {' '}
                      km/h
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
          <div className={classes.forecast}>
            <WeatherForecast forecast={forecast} weatherDataType={weatherDataType} />
          </div>
        </>
      ) : (
        <Box component="div" className={classes.error}>
          <Typography variant="body1" gutterBottom align="center">
            No city found! Please ensure that the value entered is valid.
            <br />
            <br />
            <Typography variant="body2" gutterBottom>
              <Button variant="contained" color="primary" onClick={backPage}>
                Back
              </Button>
            </Typography>
          </Typography>
        </Box>
      )}
    </Box>
  );
};
export default withStyles(styles)(WeatherCarousel);
