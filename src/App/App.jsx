/**** SYSTEM ****/
import {HashRouter as Router, Route} from 'react-router-dom';

/**** ROUTES (pages) ****/
import Home from '../pages/Home/Home';
import AddMovie from '../pages/AddMovie/AddMovie';
import Details from '../pages/Details/Details';

/**** COMPONENTS ****/
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

/**** STYLING ****/
import { Container } from '@material-ui/core';
import './App.css';


function App() {
  return (
    <Container maxWidth="md" className="App">
      <Header />
      <Nav />
      <Router>        
        <Route path="/" component={Home} exact />
        <Route path="/add-movie" component={AddMovie} />
        <Route path="/details/:id" component={Details} />
      </Router>
      <Footer />
    </Container>
  );
}


export default App;
