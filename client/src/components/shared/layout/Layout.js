import React from "react";
import Navigation from "../navigation/Navigation";

export default function Layout(props) {
  const { loggedIn, setLoggedIn, handleLogout, children } = props;
  return (
    <>
      <Navigation
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleLogout={handleLogout}
      />
      {children}
    </>
  );
}
