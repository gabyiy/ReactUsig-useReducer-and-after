import React, { useState, useEffect } from "react";

//ASA creem un context obj care primiste un parametru ca defect poate avea ce nume dorim
//tot acest context in salvam in constanta
//pentru al folsi trebuie sa introducem in interioru comonentului toate celelalte componente ca si cum ar fi un card (in app.js il folosim in felu asta) mai trebuie sa punem si provider pentru a acesa datele
//noi il folosim in navigation
//este bine sa adaugam si celelate functi care o sa le folosim creend o functie goala asaa o sa ne apara ca sugesti de catre visualcode unde vrem sa o folosim

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

//aici practic o sa menajam tot autetification in acest component
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
