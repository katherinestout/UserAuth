import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  
  render() {
    return (
    <div>
      <h1> Navbar </h1>
      <Link className = "nav-link" to = "/register">Sign Up!</Link>
      <Link className = "nav-link" to = "/login">login</Link>
     

      
    </div>
  )
}
}

export default NavBar;