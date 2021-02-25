import React from "react";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: { display: "flex", margin: "1vh 1vw 1vh 1vw" },
  propImg: {
    width: "40vw",
    boxShadow: "0 2px 2px grey",
    margin: "1vh 1vw 1vh 1vw",
  },
  propInfo: {
    display: "flex",
    flexFlow: "column wrap",
    width: "35vw",
  },
  propInfoChild: {
    margin: "2vh 0",
    padding: "2vh 2vw",
    boxShadow: "0 2px 2px grey",
  },
  icon: { paddingRight: "1vw" },
  propInfoInfo: {
    display: "flex",
    alignItems: "center",
    margin: "1vh 0 1vh 0",
  },
  contactButton: {
    color: "white",
    backgroundColor: "#0039A9",
    width: "100%",
    marginTop: "1vh",
  },
}));

export default function MoreDetailsBody(props) {
  const classes = useStyles();
  const { property } = props;
  const lat = property?.lat;
  const long = property?.lng;
  const api_key = process.env.REACT_APP_GOOGLEMAPS_KEY;
  const imgUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=hybrid&markers=color:red%7C${lat},${long}&key=${api_key}`;
  return (
    <div className={classes.body}>
      <img className={classes.propImg} alt={property.address} src={imgUrl} />
      <div className={classes.propInfo}>
        <Typography className={classes.propInfoInfo}>
          <InfoIcon className={classes.icon} />
          Built in {property.year_built}
        </Typography>
        <Typography className={classes.propInfoInfo}>
          <InfoIcon className={classes.icon} />
          {property.onsite_renewable_kwh > 0 ? (
            <>Has Renewables</>
          ) : (
            <>No onsite renewables</>
          )}
        </Typography>
        <div className={classes.propInfoChild}>
          <Typography className={classes.propInfoInfo}>
            <HomeIcon className={classes.icon} />
            {property.prop_use}
          </Typography>
          <Typography className={classes.propInfoInfo}>
            <CalendarTodayIcon className={classes.icon} />
            {property.ranking}
          </Typography>
          <Typography className={classes.propInfoInfo}>
            <SquareFootIcon className={classes.icon} />
            {property.area_sqft} square feet
          </Typography>
          <Typography className={classes.propInfoInfo}>
            <PermIdentityIcon className={classes.icon} />
            {property.owner_name
              ? property.owner_name
              : "Owner information not available"}
          </Typography>
          <Button
            className={classes.contactButton}
            disabled={property.owner ? false : true}
          >
            Contact Property Owner
          </Button>
        </div>
      </div>
    </div>
  );
}
