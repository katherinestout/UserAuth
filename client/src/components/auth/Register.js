
import React, { Component } from 'react';

class Register extends Component {

    constructor () {
      super();
      this.state = {
        email: '',
        password: '',
        password2: '',
        name:'',
        errors: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
    
    handleChange (evt) {
        console.log(evt.target.name); // the name of the form element
        //console.log(evt.target.value); // the value of the form element

      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt){
       // alert('Go to Login Page' + this.state.name );
        evt.preventDefault();

        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    
      }
        //this.props.history.push('/login');
    
    
    render () {
      return (
        <form onSubmit = {this.handleSubmit}>
        <h1>Register Form</h1>
          <label>Email</label>
          <input type="text" 
          name="email"
          value={this.state.email}
           onChange={this.handleChange} />
          
          <label>Password</label>
          <input type="password" 
          name="password" 
          value = {this.state.password}
          onChange={this.handleChange} />

          <label>Check Password</label>
          <input type="password2" 
          name="password2" 
          value = {this.state.password2}
          onChange={this.handleChange}/>

          <label>Name</label>
          <input type="name" 
          name="name" 
          value = {this.state.name}
          onChange={this.handleChange}/>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Register;