import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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
    height: "50%",
    width: "75%",
    borderRadius: "50px",
    background: "white",
    marginTop: "2em",
  },
  title: {
    fontWeight: "200",
    fontSize: "48px",
    margin: "1em 0 0 1em",
  },
  text: {
    border: "2px solid #C4C4C4",
    borderRadius: "60px",
    height: "2.5em",
    width: "90%",
    margin: "1em 0 0 4em",
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
    margin: "1em 0 0 6em",
  },
}));

export default function SearchScreen() {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.color}>
      <form className={classes.form}>
        <div className={classes.title}>Find a Property</div>
        {/* <input
          id="search"
          onChange={handleChange}
          value="search"
          placeholder="Enter an address"
          className={classes.text}
        />
        <button>
          <SearchIcon className={classes.search} /> */}
        {/* </button> */}
        <TextField
          margin="dense"
          className={classes.textInput}
          name="address"
          variant="outlined"
          // onChange={handleFilter}
          // value={filters.address}
          placeholder="Search by address"
          InputProps={{
            endAdornment: (
              <SearchIcon
                style={{
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,.39)",
                  borderRadius: "10px",
                  width: "50px",
                }}
              />
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
              // value={filters.propertyType}
              // onChange={(e) => handleFilter(e)}
            >
              <MenuItem>fads</MenuItem>
              <MenuItem>fadqrs</MenuItem>
              <MenuItem>fadfdss</MenuItem>
              <MenuItem>faaweds</MenuItem>
            </Select>
          </div>
          <div>
            <InputLabel>Property Size</InputLabel>
            <Select
              placeholder="Property Size"
              className={classes.selectInput}
              variant="outlined"
              name="propertyType"
              // value={filters.propertyType}
              // onChange={(e) => handleFilter(e)}
            ></Select>
          </div>
          <div>
            <InputLabel>Has Renewables</InputLabel>
            <Select
              placeholder="Has Renewables"
              className={classes.selectInput}
              variant="outlined"
              name="propertyType"
              // value={filters.propertyType}
              // onChange={(e) => handleFilter(e)}
            ></Select>
          </div>
          <div>
            <InputLabel>Energy Usage</InputLabel>
            <Select
              placeholder="Energy Usage"
              className={classes.selectInput}
              variant="outlined"
              name="propertyType"
              // value={filters.propertyType}
              // onChange={(e) => handleFilter(e)}
            ></Select>
          </div>
          <div>
            <InputLabel>Carbon Emmissions</InputLabel>
            <Select
              placeholder="Carbon Emmissions"
              className={classes.selectInput}
              variant="outlined"
              name="propertyType"
              // value={filters.propertyType}
              // onChange={(e) => handleFilter(e)}
            ></Select>
          </div>
          <div>
            <InputLabel>% Energy From Electricity</InputLabel>
            <Select
              placeholder="% Energy From Electricity"
              className={classes.selectInput}
              variant="outlined"
              name="propertyType"
              // value={filters.propertyType}
              // onChange={(e) => handleFilter(e)}
            ></Select>
          </div>
        </div>
      </form>
    </div>
  );
}
