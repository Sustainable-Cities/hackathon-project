import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Card from "@material-ui/core/Card";
import { __GetFavs } from "../../services/FavServices";

// import propertyImage from "../../assets/propertyimage.jpg";

const useStyles = makeStyles((theme) => ({
  root: { width: "100vw", height: "100vh", background: "#EBECF0" },
  paper: {
    width: "80vw",
    height: "85vh",
    margin: "8vh auto 8vh auto",
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
  // console.log(property);

  useEffect(() => {
    GetFavs();
    console.log("gotem");
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
          <Link to="/map">
            <Button>Back To Map</Button>
          </Link>
          <div>
            <Typography>{property.address}</Typography>
            <Typography>Boston, MA {property.zip}</Typography>
            <Button
              className={classes.iconButton}
              disabled={isFav}
              onClick={(e) => {
                addFav(params.id);
                setIconToggle((prev) => !prev);
              }}
            >
              {isFav ? <StarIcon /> : <StarBorderIcon />}
            </Button>
          </div>
          {/* <img src={propertyImage} /> */}
          <div>
            <Typography>
              <InfoIcon />
              Built in {property.year_built}
            </Typography>
            <Typography>
              <InfoIcon />
              {property.onsite_renewable_kwh > 0 ? (
                <>Has Renewables</>
              ) : (
                <>No onsite renewables</>
              )}
            </Typography>
          </div>
          <div>
            <Typography>
              <HomeIcon />
              {property.prop_use}
            </Typography>
            <Typography>
              <CalendarTodayIcon />
              {property.ranking}
            </Typography>
            <Typography>
              <SquareFootIcon />
              {property.area_sqft} square feet
            </Typography>
            <Typography>
              <PermIdentityIcon />
              {property.owner_name
                ? property.owner_name
                : "Owner information not available"}
            </Typography>
            <Button disabled={property.owner ? false : true}>
              Contact Property Owner
            </Button>
          </div>
          <div>
            <Card>
              <Typography>Energy Usage</Typography>
              <div>
                <Typography>{property.total_energy_usage_kbtu} kBTU</Typography>
                <Typography>Total</Typography>
              </div>
              <div>
                <Typography>
                  {property.site_energy_usage_kbtu_sf} kBTU
                </Typography>
                <Typography>Per Square Foot</Typography>
              </div>
            </Card>
            <Card>
              <Typography>% Energy from Electricity</Typography>
              <div>
                <Typography>
                  {`${parseFloat(property.percentage_elec) * 100}`}%
                </Typography>
                <Typography>Of Total Energy</Typography>
              </div>
            </Card>
            <Card>
              <Typography>Carbon Emissions</Typography>
              <div>
                <Typography>XXX,XXX.XX kg C02</Typography>
                <Typography>Total</Typography>
              </div>
              <div>
                <Typography>{property.ghg_intensity} kg C02</Typography>
                <Typography>Per Square Foot</Typography>
              </div>
            </Card>
          </div>
        </Paper>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
