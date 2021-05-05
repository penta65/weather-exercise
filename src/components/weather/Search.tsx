import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadWeather,
  setLocation,
  setErrorData,
  WeatherLoading,
  ForecastLoading,
  ErrorData,
} from 'src/redux/weather/weatherSlice';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Paper } from '@material-ui/core';
import styles from 'src/assets/styles/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Snackbar from 'src/common/snackbar';
import Clouds from 'src/assets/images/Clouds';

interface Props {}

function Search(props: Props) {
  const {} = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(ErrorData);
  const weatherLoading = useSelector(WeatherLoading);
  const forecastLoading = useSelector(ForecastLoading);
  const [wLoading, setWLoading] = useState(weatherLoading);
  const [fLoading, setFLoading] = useState(forecastLoading);
  const [query, setQuery] = useState('');
  const [errorMessage, setError] = useState(error);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setWLoading(weatherLoading);
  }, [weatherLoading]);
  useEffect(() => {
    setFLoading(forecastLoading);
  }, [forecastLoading]);

  useEffect(() => {
    if (error) {
      setOpen(true);
      setError(error);
    }
  }, [error]);

  const handleClose = () => {
    setOpen(false);
    dispatch(setErrorData(''));
    setError('');
  };

  const search = () => {
    dispatch(setLocation(query));
    dispatch(loadWeather(query));
  };

  return (
    <>
      <Paper elevation={0}>
        <Box component="div" overflow="hidden" className={classes.body}>
          <Box
            className={classes.container}
            style={
              {
                //   height: showSearch === true ? "100vh" : "auto"
              }
            }
          >
            <Box className={classes.item}>
              <Clouds className={classes.image} />
              {wLoading || fLoading ? (
                <Box component="div" className={classes.progess}>
                  <CircularProgress className={classes.circularProgress} />
                </Box>
              ) : (
                <Box component="div" className={classes.search}>
                  <Box component="div" className={classes.searchIcon}>
                    <SearchIcon />
                  </Box>
                  <InputBase
                    placeholder="Search City, Press Enter"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                    value={query}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        search();
                        //   setBack(true);
                      }
                    }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Snackbar handleClose={handleClose} message={errorMessage} open={open} />
      </Paper>
    </>
  );
}

export default withStyles(styles)(Search);

const duration = {
  enter: 1500,
};
