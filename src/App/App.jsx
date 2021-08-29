/**** SYSTEM ****/
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

/**** ROUTES (pages) ****/
import Home from '../pages/Home/Home';
import AddMovie from '../pages/AddMovie/AddMovie';
import Details from '../pages/Details/Details';

/**** STYLING Elements ****/
import { CssBaseline } from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { 
  Container, 
  AppBar, 
  Toolbar,
  Typography,
  Fab
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

/**** STYLING Colors ****/
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

/**** APP Theme ****/
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: grey[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    marginBottom: 20,
  },
}));


function App() {

  // Pulling redux state of current page may find another solution in future.
  // Potential useLocation() didn't have enough time to really research.
  const page = useSelector(store => store.page);

  // Depending on page state, desplay buttons, quick fix to history.push same location
  const menuOptions = (page) => {
    switch (page) {
      case 'home':
        return (
          <Fab 
            component={Link} 
            to='/add-movie'
            size="medium"
            color="secondary"
          >
            <AddIcon />
          </Fab>
        )
      case 'details':
        return (
          <Fab 
            component={Link}
            to='/'
            size="medium"
          >
            <HomeIcon />
          </Fab>
        )
      default:
        return 
    }
  } // End menuOptions()

  const classes = useStyles();
  return (
    <Container maxWidth="md"> {/* maxWidth to prevent Jellyfish effect */}
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Want to learn more about */}
        <Router>
          <AppBar position="sticky" className={classes.bar}> {/* Keep on top */}
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                The Movie Saga
              </Typography>
              {menuOptions(page)}{/* Dynamic menu options */}
            </Toolbar>
          </AppBar>
          <Route path="/" component={Home} exact />
          <Route path="/add-movie" component={AddMovie} />
          <Route path="/details/:id" component={Details} />
        </Router>
      </ThemeProvider>
    </Container>
  );
} // End App return

export default App;
