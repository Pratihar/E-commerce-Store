import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import Productlist from "./components/Productlist.jsx";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details.jsx";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
