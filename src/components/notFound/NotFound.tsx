import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import styles from 'src/assets/styles/styles';
import Clouds from 'src/assets/images/Clouds';
import Typography from '@material-ui/core/Typography';

interface Props {}

function NotFound(props: Props) {
  const {} = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0}>
        <Box component="div" overflow="hidden" className={classes.body}>
          <Box className={classes.container}>
            <Box className={classes.item}>
              <Clouds className={classes.image} />
              <Box component="div" className={classes.search}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  404 ! Nothing Found on this page
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default withStyles(styles)(NotFound);
