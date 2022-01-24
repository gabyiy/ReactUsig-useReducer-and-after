import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  //dupa ce am copiat toata   logica in auth-context trebuie sa mergem la index si si facem un wrap la tot app in AuthContextProvider

  //iar acum dinou ca ca folosim ce avem in auth-context trebuie sa importam cu ajutoru useContext ce dorim sa folosim de acolo

  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
