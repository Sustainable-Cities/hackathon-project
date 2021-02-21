import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import GoogleApiWrapper from "../../components/googlemap/GoogleMap";

export default function MainContainer() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  return (
    <>
      <GoogleApiWrapper markers={filteredProperties} />
      {/* Put in more routing here? - when do we show search component vs map component, vs favorites component. MainContainer will render components that need data from DB */}
    </>
  );
}
