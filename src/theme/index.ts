import { createMuiTheme } from '@material-ui/core';
import palette from './palette';

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});
export default theme;
