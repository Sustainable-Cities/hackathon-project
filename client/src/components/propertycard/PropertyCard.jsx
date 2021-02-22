import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: { width: "40vw" },
  header: {
    display: "grid",
    gridTemplateAreas: `"1 2 3" "4 4 4"`,
    alignItems: "center",
    marginBottom: "2vh",
  },
  iconButton: {
    justifySelf: "left",
    padding: 0,
  },
  moreDeets: { justifySelf: "right" },
  infoDiv: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1vh 0 1vh 0",
    fontSize: "14px",
  },
  title: { color: "#9FA2B4" },
  info: {},
}));

export default function PropertyCard(props) {
  const classes = useStyles();
  const { markers, marker, addFav } = props;
  const [iconToggle, setIconToggle] = useState(null);
  const property = markers?.filter(
    (item) => item.address.toLowerCase() === marker.name.toLowerCase()
  )[0];
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <Typography variant="h6">{property.address}</Typography>
          <Typography variant="p">Boston, MA {property.zip}</Typography>
        </div>
        <Button
          disabled
          className={classes.iconButton}
          onClick={(e) => {
            // console.log("clicked");
            // console.log(e);
            // setIconToggle(addFav(property.id));
            // console.log(iconToggle);
          }}
        >
          {iconToggle ? <StarIcon /> : <StarBorderIcon />}
        </Button>
        <Link
          className={classes.moreDeets}
          href={`/property/${property.id}`}
          // onClick={(e) => {
          //   e.preventDefault();
          // }}
        >
          More Details
        </Link>
      </div>
      <div className={classes.infoDiv}>
        <Typography className={classes.title}>Property Type</Typography>
        <Typography className={classes.info}>{property.prop_type}</Typography>
      </div>
      <Divider />
      <div className={classes.infoDiv}>
        <Typography className={classes.title}>Priority</Typography>
        <Typography className={classes.info}>{property.ranking}</Typography>
      </div>
      <Divider />
      <div className={classes.infoDiv}>
        <Typography className={classes.title}>Square Footage</Typography>
        <Typography className={classes.info}>{property.area_sqft}</Typography>
      </div>
      <Divider />
      <div className={classes.infoDiv}>
        <Typography className={classes.title}>Property Owner</Typography>
        <Typography className={classes.info}>
          {property.owner_name ? property.owner_name : "Not Available"}
        </Typography>
      </div>
      <Divider />
    </div>
  );
}
