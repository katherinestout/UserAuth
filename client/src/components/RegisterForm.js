import React, { Component } from 'react';

class RegisterForm extends Component {

    constructor () {
      super();
      this.state = {
        email: '',
        password: '',
        password2: '',
        name:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange (evt) {
        console.log(evt.target.name); // the name of the form element
        console.log(evt.target.value); // the value of the form element

      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt){
        alert('Go to Login Page' + this.state.name );
        evt.preventDefault();
    }
    
    render () {
      return (
        <form onSubmit = {this.handleSubmit}>
        <h1>Register Form</h1>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
          
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange} />

          <label>Check Password</label>
          <input type="password2" name="password2" onChange={this.handleChange}/>

          <label>Name</label>
          <input type="name" name="name" onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default RegisterForm;