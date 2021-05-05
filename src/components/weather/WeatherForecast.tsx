import React, { useState } from 'react';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import getWeatherIcon from 'src/common/getWeatherIcon';
import { CardMedia } from '@material-ui/core';
import styles from 'src/assets/styles/styles';
import Grid from '@material-ui/core/Grid';
import ItemsCarousel from 'react-items-carousel';
import toCelsius from 'src/common/toCelsius';
import WeatherChart from './WeatherChart';

function WeatherForecast(props: {
  forecast: any;
  weatherDataType: boolean;
}) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { forecast } = props;
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [activeDate, setActiveDate] = useState(forecast[0].dt_txt);
  const chevronWidth = 40;

  const { weatherDataType } = props;
  const handleBoxClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: React.SetStateAction<number>,
    date: any,
  ) => {
    event.preventDefault();
    setActiveItem(index);
    setActiveDate(date);
  };
  return (
    <div className={classes.forecast}>
      <Grid container>
        <Grid item lg={6} sm={6} md={6} xs={12} className={classes.center}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={screen.width > 500 ? 3 : 2}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {forecast.map(
              (
                reading: {
                  dt_txt: any;
                  description: React.ReactNode;
                  temperature: number;
                  min: number;
                  max: number;
                },
                index: number,
              ) => (
                <div
                  onClick={(event) => handleBoxClick(event, index, reading.dt_txt)}
                >
                  <Grid item key={index} className={index===activeItem?classes.dataGridActive:classes.dataGrid}>
                    <Typography
                      className={classes.titleGrid}
                      color="textSecondary"
                      gutterBottom
                    >
                      {dayjs(reading.dt_txt).format('dddd')}
                    </Typography>
                    <CardMedia
                      className={classes.iconGrid}
                      image={getWeatherIcon(reading.description)}
                    />
                    <Typography variant="h4" component="h2">
                      {weatherDataType
                        ? `${Math.round(toCelsius(reading.temperature))}°C`
                        : `${Math.round(reading.temperature)}°F`}
                    </Typography>
                    <Typography
                      className={classes.desc}
                      variant="caption"
                      display="block"
                    >
                      {reading.description}
                    </Typography>
                    <Typography variant="caption" display="block">
                      Min:
                      {' '}
                      {weatherDataType
                        ? `${Math.round(toCelsius(reading.min))}°C`
                        : `${Math.round(reading.min)}°F`}
                      <br />
                      {' '}
                      Max:
                      {' '}
                      {weatherDataType
                        ? `${Math.round(toCelsius(reading.max))}°C`
                        : `${Math.round(reading.max)}°F`}
                      <br />
                      {' '}
                      Average:
                      {' '}
                      {weatherDataType
                        ? `${Math.round(
                          toCelsius((reading.max + reading.min) / 2),
                        )}°C`
                        : `${Math.round((reading.max + reading.min) / 2)}°F`}
                      <br />
                      {' '}
                      Date:
                      {dayjs(reading.dt_txt).format('YY-MM-DD')}
                    </Typography>
                  </Grid>
                </div>
              ),
            )}
          </ItemsCarousel>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid
          lg={4}
          md={6}
          sm={12}
          style={{
            width: '100%', margin: 'auto', marginTop: '20px', height: '300px',
          }}
        >
          <WeatherChart
            activeItem={activeItem}
            weatherDataType={weatherDataType}
            activeDate={activeDate}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(WeatherForecast);
