import React from "react";
import GoogleApiWrapper from "../../components/googlemap/GoogleMap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "80vh",
    marginLeft: "15vw",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div>Home</div> */}
      <GoogleApiWrapper />
    </div>
  );
};

export default Home;
