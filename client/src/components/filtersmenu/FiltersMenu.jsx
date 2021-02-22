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

const propArr = [
  "Multifamily Housing",
  "Office",
  "Education - School",
  "Government Facility",
  "Hotel",
  "Storage Facility",
  "Residence Hall/Dormitory",
  "Retail Store",
  "Supermarket/Grocery Store",
  "Manufacturing/Industrial Plant",
  "Mixed Use Property",
  "Mall",
  "Medical Facility",
  "Dining",
  "Other - Lodging/Residential",
  "Other",
];

const propSizeArr = [
  "0 - 40000.0",
  "40000.0 - 70000.0",
  "70000.0 - 150000.0",
  "1500000.0 - 5000000",
];

const energyUsage = [
  "0 - 165000.0",
  "165000.0 - 500000.0",
  "500000.0 - 1600000.0",
  "1600000.0 and 5000000",
];

const totalCarbon = ["0 - 3.0", "3.0 - 5.0", "5.0 - 7.0", "7.0 - 20"];

const percentElec = ["0 - 25%", "25% - 50%", "50% - 75%", "75% - 100%"];

function FiltersMenu({ handleFilter, filters }) {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <div className={classes.selectContainer}>
        <InputLabel id="propType">Property Type</InputLabel>
        <Select
          labelId="propType"
          placeholder="Property Type"
          className={classes.selectInput}
          variant="outlined"
          name="propertyType"
          value={filters.propertyType}
          onChange={(e) => handleFilter(e)}
        >
          {propArr.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </div>
      <div className={classes.selectContainer}>
        <InputLabel id="propSize">Property Size</InputLabel>
        <Select
          labelId="propSize"
          placeholder="Property Size"
          className={classes.selectInput}
          variant="outlined"
          value={filters.propertySize}
          name="propertySize"
          onChange={(e) => handleFilter(e)}
        >
          {propSizeArr.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </div>
      <div className={classes.selectContainer}>
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
          value={filters.hasRenewables}
          onChange={(e) => handleFilter(e)}
        >
          <MenuItem value="y">Yes</MenuItem>
          <MenuItem value="n">No</MenuItem>
        </Select>
      </div>
      <div className={classes.selectContainer}>
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
          value={filters.totalEnergyUsage}
          onChange={(e) => handleFilter(e)}
        >
          {energyUsage.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </div>
      <div className={classes.selectContainer}>
        <InputLabel id="has-renewables-dropdown-label">
          Total Carbon Emissions
        </InputLabel>
        <Select
          placeholder="Total Carbon Emissions"
          className={classes.selectInput}
          variant="outlined"
          name="totalCarbonEmissions"
          value={filters.totalCarbonEmissions}
          onChange={(e) => handleFilter(e)}
        >
          {totalCarbon.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </div>
      <div className={classes.selectContainer}>
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
          value={filters.energyFromElectricity}
          onChange={(e) => handleFilter(e)}
        >
          {percentElec.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default FiltersMenu;
