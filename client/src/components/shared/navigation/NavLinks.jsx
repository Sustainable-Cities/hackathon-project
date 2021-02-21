import React from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function NavLinks(props) {
  const { loggedIn, handleLogout } = props;
  const loggedInOptions = (
    <>
      <Button>Map</Button>
      <Button>Favorites</Button>
      <Button onClick={handleLogout}>Logout</Button>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </>
  );

  const loggedOutOptions = (
    <>
      <Link to="/signin">
        <Button>Login</Button>
      </Link>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </>
  );

  return loggedIn ? loggedInOptions : loggedOutOptions;
}
