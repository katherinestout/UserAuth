import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import  Form from './components/Form';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <div className="App">
     <RegisterForm/>
     <Form/>
      </div>
    );
  }
}

export default App;
