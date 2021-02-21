import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import FiltersMenu from "../filtersmenu/FiltersMenu";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    left: "3vw",
    top: "8vh",
    zIndex: 1000,
    display: "grid",
    gridTemplateAreas: `"1 1 1" "2 3 4"`,
    gridRowGap: "0.5vh",
    gridColumnGap: "1vw",
  },
  textInput: {
    background: `#F5F5F5`,
    width: "70vw",
    height: "5vh",
    gridColumnStart: 1,
    gridColumnEnd: 4,
    borderRadius: "20px",
  },
  input: { height: "100%" },
  selectInput: {
    background: "#F5F5F5",
    height: "5vh",
    borderRadius: "20px",
    width: "25vw",
  },
  button: {
    background: "#F5F5F5",
    borderRadius: "20px",
    border: "1px solid rgba(0,0,0,.2)",
    height: "5vh",
    "&:hover": { border: "1px solid black", background: "#F5F5F5" },
  },
}));

export default function Search({ properties, setFilteredProperties }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    propertySize: "",
    propertyType: "",
  });
  const [moreFiltersToggle, setMoreFiltersToggle] = useState(false);

  const results = properties.filter((item) =>
    item.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredProperties(results);
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClick = () => {
    setMoreFiltersToggle((prev) => !prev);
  };

  return (
    <div className={classes.search}>
      <TextField
        margin="dense"
        className={classes.textInput}
        variant="outlined"
        onChange={handleSearch}
        value={search}
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
      <Button
        className={classes.button}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
      >
        More Filters
      </Button>
      {moreFiltersToggle ? (
        <FiltersMenu handleFilter={handleFilter} filters={filters} />
      ) : null}
    </div>
  );
}
