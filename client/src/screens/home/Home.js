import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../containers/maincontainer/MainContainer";
import Layout from "../../components/shared/layout/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "80vh",
    marginTop: "8vh",
  },
}));

const Home = (props) => {
  const { loggedIn, setLoggedIn, handleLogout } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainContainer loggedIn={loggedIn} />
    </div>
  );
};

export default Home;
