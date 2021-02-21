import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import { mainTheme } from "../../styles/MaterialUITheme";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    // border: "2px solid hotpink",
    left: "2vw",
    top: "9vh",
    zIndex: 1000,
    display: "grid",
    gridTemplateAreas: `"1 1 1" "2 3 4"`,
    gridRowGap: "1vh",
    gridColumnGap: "1vw",
  },
  textInput: {
    background: `#F5F5F5`,
    width: "80vw",
    gridColumnStart: 1,
    gridColumnEnd: 4,
  },
  selectInput: { background: "#F5F5F5" },
}));

export default function Search({ properties, setFilteredProperties }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertySize, setPropertySize] = useState("");

  const results = properties.filter((item) =>
    item.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    setFilteredProperties(results);
  };

  return (
    <div className={classes.search}>
      <TextField
        className={classes.textInput}
        variant="outlined"
        onChange={handleChange}
        value={search}
        InputProps={{ endAdornment: <SearchIcon /> }}
      />
      <Select className={classes.selectInput} variant="outlined"></Select>
      <Select className={classes.selectInput} variant="outlined"></Select>
      <Select className={classes.selectInput} variant="outlined"></Select>
    </div>
  );
}
