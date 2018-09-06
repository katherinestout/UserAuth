import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';

import './App.css';
import NavBar from './components/layout/NavBar';
import  Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar/>
      <div className="container">
<Route exact path ="/register" component = {Register}/>
<Route exact path ="/login" component = {Login}/>

     </div>
      </div>
      </Router>
    );
  }
}

export default App;
