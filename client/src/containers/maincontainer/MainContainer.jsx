import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import GoogleApiWrapper from "../../components/googlemap/GoogleMap";
import Search from "../../components/search/Search";
import { __GetProperties } from "../../services/PropertiesServices";

export default function MainContainer() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);

  //API CALLS GO HERE
  const fetchProperties = async () => {
    const data = await __GetProperties();
    setProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <GoogleApiWrapper markers={filteredProperties} />
      {/* Put in more routing here? - when do we show search component vs map component, vs favorites component. MainContainer will render components that need data from DB */}
    </>
  );
}
