import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import FiltersMenu from "../filtersmenu/FiltersMenu";
import Chip from "@material-ui/core/Chip";

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

export default function Search({
  properties,
  setFilteredProperties,
  filters,
  setFilters,
  handleFilter,
}) {
  const classes = useStyles();
  const [moreFiltersToggle, setMoreFiltersToggle] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [filterKeys, setFilterKeys] = useState([]);

  useEffect(() => {
    setFilterValues(Object.values(filters));
    setFilterKeys(Object.keys(filters));
  }, [filters]);

  const handleClick = () => {
    setMoreFiltersToggle((prev) => !prev);
  };
  const deleteChip = (e) => {
    const { name } = e.target;
    console.log(e.target.name);
    setFilters((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  return (
    <div className={classes.search}>
      <TextField
        margin="dense"
        className={classes.textInput}
        name="address"
        variant="outlined"
        onChange={handleFilter}
        value={filters.address}
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
      {filterValues.map((item, index) => {
        console.log(filterKeys[index]);
        return item.length > 0 ? (
          <Chip
            key={(item, index)}
            name={`${filterKeys[index]}`}
            label={`${item}`}
            onDelete={(e) => {
              deleteChip(e, index);
            }}
          />
        ) : null;
      })}
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
