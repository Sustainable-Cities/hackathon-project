import React from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

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
  const { properties, addFav } = props;
  const params = useParams();
  const property = properties.filter((item) => item.id === params.id);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography>TYPOGRAPHY</Typography>MORE DEETS
      </Paper>
    </div>
  );
}
