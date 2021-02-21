import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    border: "2px solid hotpink",
    left: 0,
    top: "8vh",
    zIndex: 1000,
  },
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
      <input onChange={handleChange} value={search} />
    </div>
  );
}
