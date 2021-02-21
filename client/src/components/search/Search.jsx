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
    border: "2px solid hotpink",
    left: 0,
    top: "8vh",
    zIndex: 1000,
  },
  textInput: { backgroundColor: `${mainTheme.primary}` },
  selectInput: {},
}));

export default function Search({ properties, setFilteredProperties }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");

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
        variant="filled"
        onChange={handleChange}
        value={search}
        InputProps={{ endAdornment: <SearchIcon /> }}
      />
      <InputLabel id="label">Age</InputLabel>
      <Select labelId="label" id="select" value="20">
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </Select>
    </div>
  );
}
