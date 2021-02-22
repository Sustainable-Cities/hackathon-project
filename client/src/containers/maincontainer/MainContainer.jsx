import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Map from "../../components/map/Map";
import Favorites from "../../screens/favorites/Favorites";
import SearchScreen from "../../screens/searchscreen/SearchScreen";
import { __GetProperties } from "../../services/PropertiesServices";

export default function MainContainer({ loggedIn }) {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    address: "",
    propertySize: "",
    propertyType: "",
    hasRenewables: "",
    totalCarbonEmissions: "",
    totalEnergyUsage: "",
    energyFromElectricity: "",
  });

  const searchResults = properties.filter(
    (item) => {
      const {
        address,
        propertySize,
        propertyType,
        hasRenewables,
        totalCarbonEmissions,
        totalEnergyUsage,
        energyFromElectricity,
      } = filters;

      if (address.length > 0) {
        return item.address.toLowerCase().includes(address.toLowerCase());
      }
      if (propertySize.length > 0) {
        const lower = parseInt(propertySize.split(" ")[0]);
        const higher = parseInt(propertySize.split(" ")[2]);
        if (
          parseInt(item.area_sqft) >= lower &&
          parseInt(item.area_sqft) <= higher
        ) {
          return item;
        }
      }
      if (propertyType.length > 0) {
        //return items that match propertyType, general prop types !!
        if (propertyType === item.prop_type) return item;
      }
      if (hasRenewables.length > 0) {
        return hasRenewables === "y"
          ? parseInt(item.onsite_renewable_kwh) > 0
          : parseInt(item.onsite_renewable_kwh) === 0;
      }
      if (totalCarbonEmissions.length > 0) {
        //parse INTS
        // look for items where totalCarbonEmissions is between range specified in string
        const lower = parseInt(totalCarbonEmissions.split(" ")[0]);
        const higher = parseInt(totalCarbonEmissions.split(" ")[2]);
        if (
          parseInt(item.ghg_intensity) >= lower &&
          parseInt(item.ghg_intesity) <= higher
        ) {
          return item;
        }
      }
      if (totalEnergyUsage.length > 0) {
        //parse INTS
        //look for items where etc... is between range in string
        const lower = parseInt(totalEnergyUsage.split(" ")[0]);
        const higher = parseInt(totalEnergyUsage.split(" ")[2]);
        if (
          parseInt(item.total_energy_usage_kbtu) >= lower &&
          parseInt(item.total_energy_usage_kbtu) <= higher
        ) {
          return item;
        }
      }
      if (energyFromElectricity.length > 0) {
        //parse INTS
        //look for items where etc... is between range in string
        const lower = parseInt(energyFromElectricity.split(" ")[0]) / 100;
        const higher = parseInt(energyFromElectricity.split(" ")[2]) / 100;
        if (
          parseInt(item.percentage_elec) >= lower &&
          parseInt(item.percentage_elec) <= higher
        ) {
          return item;
        }
      }
    }
    // item.address.toLowerCase().includes(search.toLowerCase())
  );

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //API CALLS GO HERE
  const fetchProperties = async () => {
    const data = await __GetProperties();
    setProperties(data);
    setFilteredProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    setFilteredProperties(searchResults);
  }, [filters]);

  return (
    <>
      <Switch>
        <Route exact path="/map">
          <Map
            properties={properties}
            filteredProperties={filteredProperties}
            setFilteredProperties={setFilteredProperties}
            filters={filters}
            setFilters={setFilters}
            handleFilter={handleFilter}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites loggedIn={loggedIn} />
        </Route>
        <Route path="/">
          <SearchScreen
            properties={properties}
            filteredProperties={filteredProperties}
            setFilteredProperties={setFilteredProperties}
            filters={filters}
            handleFilter={handleFilter}
          />
        </Route>
      </Switch>
    </>
  );
}
