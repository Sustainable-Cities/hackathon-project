import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

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
        <input
          id="search"
          onChange={handleChange}
          // value="search"
          placeholder="Enter an address"
          className={classes.text}
        />
        <SearchIcon className={classes.search} />
      </form>
    </div>
  );
}
