import React from "react";
import { useParams, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function MoreDetails(props) {
  const classes = useStyles();
  const { properties, addFav } = props;
  const params = useParams();

  return (
    <div>
      <Paper>MORE DEETS</Paper>
    </div>
  );
}
