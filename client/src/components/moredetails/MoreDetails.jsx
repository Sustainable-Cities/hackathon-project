import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { __GetFavs } from "../../services/FavServices";
import MoreDetailsHead from "./MoreDetailsHead";
import MoreDetailsBody from "./MoreDetailsBody";
import MoreDetailsCards from "./MoreDetailsCards";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: "#EBECF0",
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    width: "80vw",
    height: "100%",
  },
}));

export default function MoreDetails(props) {
  const classes = useStyles();
  const { properties, addFav, loggedIn } = props;
  const [iconToggle, setIconToggle] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const params = useParams();

  const property = properties.filter(
    (item) => item.id === parseInt(params.id)
  )[0];

  useEffect(() => {
    GetFavs();
  }, [iconToggle]);

  // API CALL TO GET FAVS USING USER ID
  const GetFavs = async () => {
    const data = await __GetFavs(loggedIn.id);
    console.log(data);
    const included = data.find(
      (item) => item.property_id === parseInt(params.id)
    );
    if (included) {
      setIsFav(true);
    }
  };

  return (
    <div className={classes.root}>
      {property ? (
        <Paper className={classes.paper}>
          <MoreDetailsHead
            classes={classes}
            property={property}
            addFav={addFav}
            setIconToggle={setIconToggle}
            isFav={isFav}
            params={params}
          />
          <Divider />
          <MoreDetailsBody classes={classes} property={property} />
          <MoreDetailsCards classes={classes} property={property} />
        </Paper>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
