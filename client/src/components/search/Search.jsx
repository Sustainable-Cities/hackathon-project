import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function Search({ properties, setFilteredProperties }) {
  const [search, setSearch] = useState("");

  const results = properties.filter((item) =>
    item.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
    setFilteredProperties(results);
  };

  return <TextField onChange={handleChange} value={search} />;
}
