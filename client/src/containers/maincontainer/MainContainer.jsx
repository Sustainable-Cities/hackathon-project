import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Map from "../../components/map/Map";
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
          {loggedIn ? (
            <Map
              properties={properties}
              filteredProperties={filteredProperties}
              setFilteredProperties={setFilteredProperties}
            />
          ) : (
            <div>
              Map will be here if you're logged in. You're logged out lol
            </div>
          )}
        </Route>
        <Route path="/">
          <SearchScreen />
          {/* on submit pushes to /map*/}
        </Route>

        {/* Put in more routing here? - when do we show search component vs map component, vs favorites component. MainContainer will render components that need data from DB */}
      </Switch>
    </>
  );
}
