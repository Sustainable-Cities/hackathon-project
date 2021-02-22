import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    flexFlow: "row wrap",
  },

  buttons: {
    width: "100%",
  },
  links: {
    textDecoration: "none",
  },
}));

export default function NavLinks(props) {
  const classes = useStyles();
  const { loggedIn, handleLogout } = props;
  const loggedInOptions = (
    <div className={classes.navlinks}>
      <Link className={classes.links} to="/">
        <Button className={classes.buttons}>Search</Button>
      </Link>
      <Link className={classes.links} to="/map">
        <Button className={classes.buttons}>Map</Button>
      </Link>
      <Link className={classes.links} to="/favorites">
        <Button className={classes.buttons}>Favorites</Button>
      </Link>
      <Link className={classes.links}>
        <Button className={classes.buttons} onClick={handleLogout}>
          Logout
        </Button>
      </Link>
    </div>
  );

  const loggedOutOptions = (
    <div className={classes.navlinks}>
      <Link className={classes.links} to="/">
        <Button className={classes.buttons}>Login</Button>
      </Link>
      <Link className={classes.links} to="/">
        <Button className={classes.buttons}>Home</Button>
      </Link>
    </div>
  );

  return loggedIn ? loggedInOptions : loggedOutOptions;
}
