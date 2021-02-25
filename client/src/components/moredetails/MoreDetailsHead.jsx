import React from "react";
import { Link, useHistory } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "1vh 1vw",
    paddingTop: "2vh",
  },
  address: {},
  iconButton: { alignSelf: "flex-start" },
  backButton: {
    alignSelf: "flex-start",
    justifySelf: "flex-end",
    flexGrow: 6,
    textAlign: "right",
  },
}));

export default function MoreDetailsHead(props) {
  const classes = useStyles();
  const { property, addFav, setIconToggle, isFav, params } = props;
  const history = useHistory();
  return (
    <div className={classes.header}>
      <div className={classes.address}>
        <Typography variant="h4">{property.address}</Typography>
        <Typography variant="h6">Boston, MA {property.zip}</Typography>
      </div>
      <Button
        className={classes.iconButton}
        disabled={isFav}
        onClick={(e) => {
          addFav(params.id);
          setIconToggle((prev) => !prev);
          history.push("/favorites");
        }}
      >
        {isFav ? <StarIcon /> : <StarBorderIcon />}
      </Button>
      <div className={classes.backButton}>
        <Link to="/map" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Back To Map</Button>
        </Link>
      </div>
    </div>
  );
}
