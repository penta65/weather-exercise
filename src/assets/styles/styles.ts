import {
  fade, Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  bgImage: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
    width: 180,
    height: 180,
  },
  card: {
    width: 'auto',
  },
  body: {
    // height: "100vh",
    [theme.breakpoints.down('md')]: {
      // height: "auto",
    },
  },
  container: {
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      // height: "80vh! important",
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 'auto',
  },
  copyright: {
    height: '50px',
    marginBottom: 10,
  },
  btnToggle: {
    float: 'right',
  },
  menu: {
    display: 'flex',
    padding: 10,
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  search: {
    position: 'absolute',
    top: '60%',
    left: '55%',
    transform: ' translate(-50%, -50%)',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginBottom: 10,
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: 500,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  '@media (max-width: 800px)': {
    flexContainer: {
      flexDirection: 'column',
    },
  },
  root: {
    display: 'flex',
  },
  error: {
    // height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 160,
    height: 160,
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: 200,
      height: 200,
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  details: {
    margin: 'auto',
    width: 'auto',
    textAlign: 'center',
    [theme.breakpoints.only('lg')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
    },
  },
  details2: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
      paddingRight: '50px',
    },
    margin: 'auto',
    width: 'auto',
    paddingTop: '30px',
  },
  circularProgress: {
    margin: 'auto',
  },
  progess: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
  },
  titleGrid: {
    fontSize: 18,
  },
  pos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGrid: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  desc: {
    fontSize: 10,
  },
  forecast: {
    // width: "100%",
    padding: '31px',
  },
  center: {
    margin: 'auto',
  },
  dataGrid: {
    cursor: 'pointer',
    padding: '10px',
    border: '2px solid #5fdaff',
  },
  dataGridActive:{
    cursor: 'pointer',
    padding: '10px',
    border: '3px solid #00b8ff', 
  }
});

export default styles;
