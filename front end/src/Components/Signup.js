import React, { Component } from "react";
import { userRegistration } from "../Services/registration";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {

    e.preventDefault()
    const { name, email, phone, password } = this.state;
    const status = await userRegistration({ id: 0, name, email, phone, password });

    if(status === 200) {
      this.props.history.push("/Search")
    }

  }

  render() {
    console.log("props", this.props)
    const { name, email, phone, password } = this.state;
    return (
      <div className="wrapper1" style={{top: "100px"}}>
        <div className="container">
          <h1>SIGNUP</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="Name"
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="text"
            placeholder="PhoneNo"
            value={phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
          <input
            type="password"
            placeholder="Create-Password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {/* <button onClick={() => this.handleChange()} type="submit" defaultValue="Signup" /> */}
          {/* <button onClick={this.handleChange}>Submit!</button> */}
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
