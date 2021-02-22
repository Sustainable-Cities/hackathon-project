import React from "react";
import { useParams, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
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

export default function MoreDetails(props) {
  const { properties, addFav } = props;
  const params = useParams();

  return (
    <div>
      <Paper>MORE DEETS</Paper>
    </div>
  );
}
