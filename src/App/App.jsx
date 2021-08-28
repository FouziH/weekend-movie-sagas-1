/**** SYSTEM ****/
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import React, { useState } from 'react';

/**** ROUTES (pages) ****/
import Home from '../pages/Home/Home';
import AddMovie from '../pages/AddMovie/AddMovie';
import Details from '../pages/Details/Details';

/**** COMPONENTS ****/
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

/**** STYLING ****/
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container, 
  AppBar, 
  Toolbar,
  Typography,
  IconButton, 
  Switch,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Menu
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { grey } from '@material-ui/core/colors';

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

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="md" className="App">
      <Router>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <IconButton 
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              The Movie Saga
            </Typography>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to='/'>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/add-movie'>Add Movie</Link></MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Route path="/" component={Home} exact />
        <Route path="/add-movie" component={AddMovie} />
        <Route path="/details/:id" component={Details} />
      </Router>
      <Footer />
    </Container>
  );
}


export default App;
