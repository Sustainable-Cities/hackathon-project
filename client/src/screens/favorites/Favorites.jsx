import React, { useState, useEffect } from "react";
import { __GetFavs } from "../../services/FavServices";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactCsv from "../../components/csvexport/ReactCsv";

const useStyles = makeStyles((theme) => ({
  favs: {
    marginTop: "10vh",
    marginLeft: "5vw",
  },
  favContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  form: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: "100%",
    width: "75%",
    borderRadius: "50px",
    background: "white",
    marginTop: "2em",
  },
  text: {
    marginTop: "2em",
    marginLeft: "2em",
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
      <ReactCsv data={favs} />
      <div className={classes.favContainer}>
        {favs.length > 0
          ? favs.map((el, i) => (
              <form key={i} className={classes.form}>
                <div className={classes.text}>
                  <Typography>{el.Property.prop_name}</Typography>
                  <Typography>
                    {el.Property.address}, {el.zip}
                  </Typography>
                  <Typography>
                    Property Type: {el.Property.prop_type}
                  </Typography>
                  <Typography>{el.Property.ranking}</Typography>
                  <Typography>
                    {el.Property.area_sqft} area square feet
                  </Typography>
                </div>
              </form>
            ))
          : null}
      </div>
    </div>
  );
}
