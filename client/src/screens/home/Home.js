import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../containers/maincontainer/MainContainer";
import Layout from "../../components/shared/layout/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "80vh",
    marginLeft: "15vw",
  },
}));

const Home = (props) => {
  const { loggedIn, setLoggedIn, handleLogout } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainContainer loggedIn={loggedIn} />

      {/* Show something different on Homepage when logged in vs when logged out, renders main container always for now 
        when logged out - Login / SignUp nav links
        when logged in - search
        */}
    </div>
  );
};

export default Home;
