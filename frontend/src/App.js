import './App.css';
import Users from './components/Users';
import Contact from './components/Contact';
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listings from './components/Listings';
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import Listing from './components/Listing';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage';
import Form from './components/Form/Form';
import Trades from './components/Trades'
import Rewards from './components/Rewards'
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Homepage}>
        </Route>
        <Container className='mt-3'>
          <Route exact path="/users">
            <h1 style={{textAlign: 'center'}}>Users</h1>
            <Users />
          </Route>
          <Route path="/users/:userid">
            <Profile />
          </Route>
          <Route exact path="/listing">
            <h1 style={{textAlign: 'center'}}>Listings</h1>
            <Listings />
          </Route>
          <Route path="/listing/:listingid">
            <Listing />
          </Route>
         
          <Route path='/trades'>
            <Trades />
          </Route>
          <Route path='/rewards'> 
            <h1 style={{textAlign: 'center'}}>Rewards</h1>
            <Rewards />
          </Route>
          <Route path="/About" component={About}>
            <About />
          </Route>
        </Container>
        
      </Switch>
    <Footer />
    </>
  );
}

export default App;
