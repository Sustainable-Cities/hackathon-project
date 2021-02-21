import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttons: {
    width: "100%",
  },
  links: {
    textDecoration: "none",
    width: "100%",
  },
}));

export default function NavLinks(props) {
  const classes = useStyles();
  const { loggedIn, handleLogout } = props;
  const loggedInOptions = (
    <>
      <Button className={classes.buttons}>Map</Button>
      <Button className={classes.buttons}>Favorites</Button>
      <Button className={classes.buttons} onClick={handleLogout}>
        Logout
      </Button>
      <Link className={classes.links} to="/">
        <Button className={classes.buttons}>Home</Button>
      </Link>
    </>
  );

  const loggedOutOptions = (
    <>
      <Link className={classes.links} to="/signin">
        <Button className={classes.buttons}>Login</Button>
      </Link>
      <Link className={classes.links} to="/">
        <Button className={classes.buttons}>Home</Button>
      </Link>
    </>
  );

  return loggedIn ? loggedInOptions : loggedOutOptions;
}
