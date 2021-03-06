import React from "react";
import GoogleApiWrapper from "../googlemap/GoogleMap.jsx";
import Search from "../search/Search";

export default function Map({
  filteredProperties,
  filters,
  setFilters,
  handleFilter,
  addFav,
}) {
  return (
    <div>
      <Search
        filters={filters}
        setFilters={setFilters}
        handleFilter={handleFilter}
      />
      <GoogleApiWrapper markers={filteredProperties} addFav={addFav} />
    </div>
  );
}
