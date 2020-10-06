import React from 'react';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (       
    // <Router>
    //   <NavBar>
    //     <Switch>
    //       <Route path="/" component={Home} exact></Route>
    //       <Route path="/Login" component={Login} exact></Route>
    //       <Route path="/SignUp" component={Signup} exact></Route>
    //     </Switch>
    //   </NavBar>
    // </Router>
    <Login></Login>
    // <Signup></Signup>
  );
}

export default App;
