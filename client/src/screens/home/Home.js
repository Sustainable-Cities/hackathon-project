import React, { useState } from "react";
import GoogleApiWrapper from "../../components/googlemap/GoogleMap";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "80vh",
    marginLeft: "15vw",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  return (
    <div className={classes.root}>
      <GoogleApiWrapper markers={filteredProperties} />

      {/* Put in more routing here? - when do we show search component vs map component, vs favorites component. Basically making Home component a container for rendering data showing components */}
    </div>
  );
};

export default Home;
