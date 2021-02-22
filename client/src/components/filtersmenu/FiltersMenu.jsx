import React from "react";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles((theme) => ({
  menu: {
    position: "absolute",
    top: "13vh",
    right: 0,
    zIndex: 1001,
    background: "#F5F5F5",
    padding: 10,
    display: "grid",
    gridTemplateAreas: `"1 2" "3 4"`,
    gridColumnGap: "1vw",
    gridRowGap: "1vh",
    width: "40vw",
    border: "1px solid rgba(0,0,0,.2)",
    borderRadius: "25px",
  },
  selectInput: {
    background: "#F5F5F5",
    height: "5vh",
    borderRadius: "20px",
  },
}));

export default function FiltersMenu({ handleFilter, filters }) {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <Select
        placeholder="Has Renewables"
        className={classes.selectInput}
        variant="outlined"
        // value={propertySize}
        onChange={(e) => handleFilter(e)}
      ></Select>
      <Select
        placeholder="Total Energy Usage"
        className={classes.selectInput}
        variant="outlined"
        // value={propertySize}
        onChange={(e) => handleFilter(e)}
      ></Select>
      <Select
        placeholder="Total Carbon Emissions"
        className={classes.selectInput}
        variant="outlined"
        // value={propertySize}
        onChange={(e) => handleFilter(e)}
      ></Select>
      <Select
        placeholder="% Energy from Electricity"
        label="% Energy from Electricity"
        className={classes.selectInput}
        variant="outlined"
        // value={propertySize}
        onChange={(e) => handleFilter(e)}
      ></Select>
    </div>
  );
}
