import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "grid",
    gridTemplateAreas: `"1 2 3" "4 4 4"`,
    alignItems: "center",
  },
}));

export default function PropertyCard(props) {
  const classes = useStyles();
  const { markers, marker, addFav } = props;
  const [iconToggle, setIconToggle] = useState(false);
  const property = markers.filter(
    (item) => item.address.toLowerCase() === marker.name.toLowerCase()
  )[0];
  console.log(property);
  return (
    <div>
      <div className={classes.header}>
        <div>
          <Typography variant="h6">{property.address}</Typography>
          <Typography variant="p">Boston, MA {property.zip}</Typography>
        </div>
        <IconButton
          onClick={(e) => {
            addFav(property.id);
            setIconToggle((prev) => true);
          }}
        >
          {iconToggle ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
        <Link href={`/property/${property.id}`}>More Details</Link>
      </div>
      <Typography>Property Type</Typography>
      <Typography>{property.prop_type}</Typography>
      <Divider />
      <Typography>Priority</Typography>
      <Typography>{property.ranking}</Typography>
      <Divider />
      <Typography>Square Footage</Typography>
      <Typography>{property.area_sqft}</Typography>
      <Divider />
      <Typography>Property Owner</Typography>
      <Typography>
        {property.owner_name ? property.owner_name : "Not Available"}
      </Typography>
      <Divider />
    </div>
  );
}
