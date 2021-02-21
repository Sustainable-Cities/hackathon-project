import React from "react";
import GoogleApiWrapper from "../googlemap/GoogleMap.jsx";
import Search from "../search/Search";

export default function Map({
  filteredProperties,
  setFilteredProperties,
  properties,
}) {
  return (
    <div>
      <Search
        properties={properties}
        setFilteredProperties={setFilteredProperties}
      />
      <GoogleApiWrapper markers={filteredProperties} />
    </div>
  );
}
