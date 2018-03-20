import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/navbar.js'
import Register from "./ComplainReg/complain.js";
//<img src={logo} className="App-logo" alt="logo" />
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      <div className="jumbotron">
        <Register />
      </div>
      </div>
    );
  }
}

export default App;
