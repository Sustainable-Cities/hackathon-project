import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainContainer from "../../containers/maincontainer/MainContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "80vh",
    marginLeft: "15vw",
  },
}));

const Home = (props) => {
  const { loggedIn } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainContainer />

      {/* Show something different on Homepage when logged in vs when logged out, renders main container always for now */}
    </div>
  );
};

export default Home;
