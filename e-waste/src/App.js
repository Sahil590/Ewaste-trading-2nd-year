import React, { Component } from 'react';
import Admin from './pages/Admin';
import Category from './pages/Category';
import Products from './pages/Products';
<<<<<<< HEAD
import addcategory from'./pages/addcategory';
import addproduct from'./pages/addproduct';
import {BrowserRouter as Router,Route,Redirect,Switch,Link} from 'react-router-dom';
=======
import {BrowserRouter as Router,Route,Redirect, Link} from 'react-router-dom';
>>>>>>> f2cd5992c6f52a7bdaa46379a8193007f09bf3af
class App extends Component {
  render() {
    return ( 
      <div>
        <Router>
      <Route exact path='/' component={Admin} />
      <Route exact path='/Category' component={Category} />
      <Route exact path='/addcategory' component={addcategory} />
      <Route exact path='/Products' component={Products} />
      <Route exact path='/addproduct' component={addproduct} />
<<<<<<< HEAD
      

=======
>>>>>>> f2cd5992c6f52a7bdaa46379a8193007f09bf3af
      </Router>
  </div>
    );
  }
}
export default App;
