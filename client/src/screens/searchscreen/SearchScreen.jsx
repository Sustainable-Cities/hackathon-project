import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#E5E5E5",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: "50vh",
    width: "75vw",
    borderRadius: "50px",
    background: "white",
    marginTop: "2em",
    padding: "1vh 1vw 1vh 1vw",
  },
  title: {
    fontWeight: "200",
    fontSize: "48px",
    // border: "2px none hotpink",
    margin: "2vh 2vw 2vh 2vw",
  },
  text: {
    border: "2px solid #C4C4C4",
    borderRadius: "60px",
    height: "2.5em",
    width: "90%",
    margin: "auto 2vh",
  },
  search: {
    border: "2px solid #C4C4C4",
    boxShadow: "inset 2px 2px 5px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",
    height: "1.5em",
    width: "2em",
  },
  selectInput: {
    background: "#F5F5F5",
    height: "5vh",
    borderRadius: "20px",
    width: "25vw",
  },
  selectContainer: {
    justifySelf: "center",
    alignSelf: "center",
    display: "grid",
    gridTemplateAreas: `'1 2' '3 4' '5 6'`,
    margin: "2vh 3vw",
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

export default function SearchScreen({
  properties,
  filteredProperties,
  setFilteredProperties,
  filters,
  handleFilter,
}) {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/map");
  };

  return (
    <div className={classes.color}>
      <form onSubmit={onSubmit} className={classes.form}>
        <Typography className={classes.title}>Find a Property</Typography>
        <TextField
          margin="dense"
          className={classes.text}
          name="address"
          variant="outlined"
          onChange={handleFilter}
          value={filters.address}
          placeholder="Search by address"
          InputProps={{
            endAdornment: (
              <Button type="submit">
                <SearchIcon
                  style={{
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,.39)",
                    borderRadius: "10px",
                    width: "50px",
                  }}
                />
              </Button>
            ),
            style: { height: "100%", padding: "0 14px", borderRadius: "20px" },
          }}
        />
        <div className={classes.selectContainer}>
          <div>
            <InputLabel id="propType">Property Type</InputLabel>
            <Select
              labelId="propType"
              id="select"
              placeholder="Property Type"
              className={classes.selectInput}
              variant="outlined"
              name="propertyType"
              value={filters.propertyType}
              onChange={(e) => handleFilter(e)}
            >
              {propArr.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel>Property Size</InputLabel>
            <Select
              placeholder="Property Size"
              className={classes.selectInput}
              variant="outlined"
              name="propertySize"
              value={filters.propertySize}
              onChange={(e) => handleFilter(e)}
            >
              {propSizeArr.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel>Has Renewables</InputLabel>
            <Select
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
          <div>
            <InputLabel>Total Energy Usage</InputLabel>
            <Select
              placeholder="Energy Usage"
              className={classes.selectInput}
              variant="outlined"
              name="totalEnergyUsage"
              value={filters.totalEnergyUsage}
              onChange={(e) => handleFilter(e)}
            >
              {energyUsage.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel>Total Carbon Emmissions</InputLabel>
            <Select
              placeholder="Carbon Emmissions"
              className={classes.selectInput}
              variant="outlined"
              name="totalCarbonEmissions"
              value={filters.totalCarbonEmissions}
              onChange={(e) => handleFilter(e)}
            >
              {totalCarbon.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div>
            <InputLabel>% Energy From Electricity</InputLabel>
            <Select
              placeholder="% Energy From Electricity"
              className={classes.selectInput}
              variant="outlined"
              name="energyFromElectricity"
              value={filters.energyFromElectricity}
              onChange={(e) => handleFilter(e)}
            >
              {percentElec.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
}
