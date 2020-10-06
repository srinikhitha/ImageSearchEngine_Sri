import React, { Component } from 'react';
import {userRegistration} from '../Services/registration';

class Signup extends Component {
  
//   constructor() {
//     super(props);
//     this.sayHello = this.sayHello.bind(this);
//   }

//   sayHello() {
//     alert('Hello!');
//   }
handleChange(){
    
    userRegistration(
          0,
         "sri",
        "srinikita1.b@gmail.com",
         "7573641309",
        "123456",
        "string"
    );
    
}
 render() {

    return (
        <div>
        <meta charSet="utf-8" />
        <title>Sign up Form</title>
        <link rel="stylesheet" href="Login Form.css" />
        <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
        <div className="container">
          <h1>SIGNUP</h1>
          <input type="text" name placeholder="Username" />
          <input type="text" name placeholder="Email" />
          <input type="text" name placeholder="PhoneNo" />
          <input type="password" name placeholder="Create-Password" />
          {/* <button onClick={() => this.handleChange()} type="submit" defaultValue="Signup" /> */}
          <button onClick={this.handleChange}>Submit!</button>
        </div>
      </div>
    );

 } 
 
}

export default Signup;