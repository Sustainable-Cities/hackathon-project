import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Search({ search, setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return <TextField onChange={handleChange} value={search} />;
}
