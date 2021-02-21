import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Map from "../../components/map/Map";
import Favorites from "../../screens/favorites/Favorites";
import SearchScreen from "../../screens/searchscreen/SearchScreen";
import { __GetProperties } from "../../services/PropertiesServices";

export default function MainContainer({ loggedIn }) {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  //API CALLS GO HERE
  const fetchProperties = async () => {
    const data = await __GetProperties();
    setProperties(data);
    setFilteredProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/map">
          <Map
            properties={properties}
            filteredProperties={filteredProperties}
            setFilteredProperties={setFilteredProperties}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <SearchScreen
            properties={properties}
            filteredProperties={filteredProperties}
            setFilteredProperties={setFilteredProperties}
          />
        </Route>
      </Switch>
    </>
  );
}
