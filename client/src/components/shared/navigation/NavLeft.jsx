import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import NavLinks from "./NavLinks.jsx";
import Logo from "../logo/Logo";

const drawerWidth = "15vw";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexFlow: "row wrap",
    height: "8vh",
    alignItems: "center",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    alignItems: "center",
  },
}));

export default function NavLeft({ loggedIn, handleLogout }) {
  const classes = useStyles();
  return (
    <>
      <nav>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          {/* <AppBar position="fixed" className={classes.appBar}> */}
          <Logo />
          <NavLinks loggedIn={loggedIn} handleLogout={handleLogout} />
          {/* </AppBar> */}
        </Drawer>
      </nav>
    </>
  );
}
