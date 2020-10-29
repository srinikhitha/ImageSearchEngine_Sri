import React, { useState } from "react";
import { userLogin } from "../Services/registration";

import {useHistory} from "react-router-dom"

function Login(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] =  useState("")

  let history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const status = await userLogin({ username, password });
console.log("status", status)
    if(status === 200) {
      history.push("/Search")
    }
    
  }
  const handleForgot = async (e) => {
    e.preventDefault()
    history.push("/forgot")

    
  }

  console.log("props", props)
  return (
    <div className="wrapper" style={{top: "65px"}}>
      <div>
      <form className="container" action method="GET">
        <h1>LOGIN</h1>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" onChange={(e) => setPassword(e.target.value) } placeholder="Password" />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="submit" onClick={handleForgot}>Forget Password</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
