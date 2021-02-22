import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
  selectContainer: { justifySelf: "center", alignSelf: "center" },
  selectInput: {
    background: "#F5F5F5",
    height: "5vh",
    borderRadius: "20px",
    width: "100%",
  },
}));

export default function FiltersMenu({ handleFilter, filters }) {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <div className={classes.selectContainer}>
        <Select
          placeholder="Property Type"
          className={classes.selectInput}
          variant="outlined"
          name="propertyType"
          value={filters.propertyType}
          onChange={(e) => handleFilter(e)}
        ></Select>
        <Select
          placeholder="Property Size"
          className={classes.selectInput}
          variant="outlined"
          value={filters.propertySize}
          name="propertySize"
          onChange={(e) => handleFilter(e)}
        ></Select>
        <InputLabel id="has-renewables-dropdown-label">
          Has Renewables
        </InputLabel>
        <Select
          id="has-renewables"
          labelId="has-renewables-dropdown-label"
          placeholder="Has Renewables"
          className={classes.selectInput}
          variant="outlined"
          name="hasRenewables"
          // value={filters.hasRenewables}
          onChange={(e) => handleFilter(e)}
        >
          <MenuItem value={"y"}>Yes</MenuItem>
          <MenuItem value={"n"}>No</MenuItem>
        </Select>
      </div>
      <div>
        <InputLabel id="total-energy-dropdown-label">
          Total Energy Usage
        </InputLabel>
        <Select
          id="total-energy"
          labelId="total-energy-dropdown-label"
          placeholder="Total Energy Usage"
          className={classes.selectInput}
          variant="outlined"
          name="totalEnergyUsage"
          // value={filters.totalEnergyUsage}
          onChange={(e) => handleFilter(e)}
        ></Select>
      </div>
      <div>
        <InputLabel id="has-renewables-dropdown-label">
          Has Renewables
        </InputLabel>
        <Select
          placeholder="Total Carbon Emissions"
          className={classes.selectInput}
          variant="outlined"
          name="totalCarbonEmissions"
          // value={filters.totalCarbonEmissions}
          onChange={(e) => handleFilter(e)}
        ></Select>
      </div>
      <div>
        <InputLabel id="energy-dropdown-label">
          % Energy From Electricity
        </InputLabel>
        <Select
          labelId="energy-dropdown-label"
          placeholder="% Energy from Electricity"
          label="% Energy from Electricity"
          className={classes.selectInput}
          variant="outlined"
          name="energyFromElectricity"
          // value={filters.energyFromElectricity}
          onChange={(e) => handleFilter(e)}
        ></Select>
      </div>
    </div>
  );
}
