import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Layout from "./Components/Layout";
import Search from "./Components/Search";
import AdvancedSearch from "./Components/AdvancedSearch";
import Forgot from "./Components/forgot";

function App() {
  return (
    <>
      <Router>
        {/* <Layout /> */}
        <Switch>
          <Route path="/" exact>
          <Layout />
            <Login />
          </Route>
          <Route path="/Login" exact>
          <Layout />
            <Login />
          </Route>
          <Route path="/SignUp" exact render={(props) =><> <Layout /><Signup {...props} /></>} />
            
          
          <Route path="/Search" exact>
          <Layout />
            <Search />
          </Route>
          <Route path="/AdvancedSearch" exact>
          <Layout />
            <AdvancedSearch />
          </Route>
          <Route path="/forgot" exact>
          <Layout />
            <Forgot />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
