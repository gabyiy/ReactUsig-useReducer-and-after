import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  //aici utilizam hooku useContext pe care il salvam in o varianta  ia aceasta variant  acesam ce avem  salvat in AuthoContext(practic ce avem in interioru la AuthContext mai exact ce avem la isLoggedIn)
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
