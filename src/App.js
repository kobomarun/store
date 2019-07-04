import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Banner from './components/Banner'
import ProductList from './components/ProductList';
import SideBar from './components/SideBar';
import Cart from './components/Cart';
import Details from './components/Details';

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <TopBar />
        <NavBar />
        <Switch>
          <Route exact path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <div className="container row m-4 bg">
            <SideBar />
            <Route exact path="/" component={ProductList} />
          </div>
        </Switch>
      </React.Fragment>
    );
  }

}

export default App;
