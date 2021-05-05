import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadWeather, setViewType, setCelsiusView, CelsiusView,
} from 'src/redux/weather/weatherSlice';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import WeatherContainer from 'src/containers/weather/weatherContainer';
import { Box, Paper, Fade } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from 'src/assets/styles/styles';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';
import WeatherCarousel from './WeatherCarousel';

interface Props {}

function WeatherCard(props: Props) {
  const {} = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [weatherDataType, setWeatherDataType] = useState(false);

  function backPage() {
    dispatch(setViewType('searchView'));
  }
  function handleChangeWeatherDataType() {
    setWeatherDataType(!weatherDataType);
    dispatch(setCelsiusView(!weatherDataType));
  }

  return (
    <>
      <Paper elevation={0}>
        <Box component="div" overflow="hidden" className={classes.body}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Box className={classes.menu}>
              <Typography variant="h6" className={classes.title}>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={backPage}
                >
                  <ArrowBackIcon fontSize="large" />
                </IconButton>
              </Typography>
              <Toolbar>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                >
                  Fahrenheit
                </Typography>
                <Switch
                  className={classes.btnToggle}
                  checked={weatherDataType}
                  onChange={() => handleChangeWeatherDataType()}
                  color="primary"
                />
                <Typography
                  className={classes.title}
                  color="textSecondary"
                >
                  Celsius
                </Typography>
              </Toolbar>
            </Box>
          </AppBar>

          <Box className={classes.item}>
            <WeatherCarousel weatherDataType={weatherDataType} />
          </Box>

        </Box>
      </Paper>
    </>
  );
}

export default withStyles(styles)(WeatherCard);

const duration = {
  enter: 1500,
};
