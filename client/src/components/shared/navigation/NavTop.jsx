import React from "react";
import AppBar from "@material-ui/core/AppBar";
import NavLinks from "./NavLinks.jsx";
import Logo from "../logo/Logo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexFlow: "row wrap",
    height: "8vh",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default function NavTop({ loggedIn, handleLogout }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Logo />
      <NavLinks loggedIn={loggedIn} handleLogout={handleLogout} />
    </AppBar>
  );
}
