import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./components/store/auth-context";

//aici facem un wrap la toate componentele unde vom folosi Authocontext si trecandui ca value isLoggedIn aceasta o sa le treaca la toate componentele child de fiecare data cand se schimba versiunea updata a isLoggedIn practic spuand ca isLoggedIn din AuthoContex o sa fie lafel cu isLoggedIn care o avem aici in useState in app.js
//si asa putem proceda si cu trecerea unei fucti de exemplu logoutHandler

//in schimb trecem la onLogin si logout  ca parametri pfuctiile respective doarece o sa le folosim direct in componentele respective
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
