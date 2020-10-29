import React from "react";
import { Link, useHistory } from "react-router-dom";

const Layout = () => {

  const history = useHistory()

  console.log(history, "his")
  return (
    <nav>
      <div className="logo">
        <h2>Sri Image Search</h2>
      </div>
      {
        !history.location.pathname.includes("Search") && <ul className="nav-links">
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
      }
      
    </nav>
  );
};

export default Layout;
