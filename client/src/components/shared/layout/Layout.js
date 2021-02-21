import React from "react";
import NavLeft from "../navigation/NavLeft";
import NavTop from "../navigation/NavTop";

export default function Layout(props) {
  const { loggedIn, setLoggedIn, handleLogout, children } = props;
  return (
    <>
      <NavTop
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleLogout={handleLogout}
      />
      {children}
    </>
  );
}
