import React, { useState, useEffect } from "react";
import { __GetFavs } from "../../services/FavServices";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  favs: {
    marginTop: "10vh",
  },
}));

export default function Favorites({ loggedIn }) {
  const classes = useStyles();
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    GetFavs();
  }, []);

  // API CALL TO GET FAVS USING USER ID
  const GetFavs = async () => {
    const data = await __GetFavs(loggedIn.id);
    console.log(data);
    setFavs(data);
  };

  return (
    <div className={classes.favs}>
      <h1>Your Favorites ({favs.length})</h1>
      {favs.length > 0
        ? favs.map((el) => (
            <div>
              <div>{el.Property.prop_name}</div>
              <div>
                {el.Property.address}, {el.zip}
              </div>
              <div>Property Type: {el.Property.prop_type}</div>
              <div>{el.Property.ranking}</div>
              <div>{el.Property.area_sqft} area square feet</div>
            </div>
          ))
        : null}
    </div>
  );
}
