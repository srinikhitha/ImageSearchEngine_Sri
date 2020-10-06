import React from 'react';



function Login() {
  return (

    <div>
        <meta charSet="utf-8" />
        <title>Login Form</title>
        <link rel="stylesheet" href="Login Form.css" />
        <link href="https://fonts.googleapis.com/css?family=Coiny" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
        <form className="container" action method="GET">
          <h1>LOGIN</h1>
          <input type="text" name placeholder="Username" />
          <input type="password" name placeholder="Password" />
          <input type="submit" defaultValue="Login" />
        </form>
      </div>

  );
}

export default Login;