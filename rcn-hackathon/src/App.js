import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
//<img src={logo} className="App-logo" alt="logo" />
class App extends Component {
  render() {
    return (
      <div className="App jumbotron">
        <header className="App-header ">
          <h1 className="navbar-brand header-nav">Welcome Rajasthan Complain Network</h1>
        </header>
        <p className="App-intro">
          This is a site where you
        </p>
      </div>
    );
  }
}

export default App;
