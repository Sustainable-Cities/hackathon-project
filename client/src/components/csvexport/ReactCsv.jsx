import React from "react";
import { CSVLink } from "react-csv";
import Button from "@material-ui/core/Button";

const ExportReactCSV = ({ data }) => {
  const headers = [
    { label: "ranking", key: "ranking" },
    { label: "owner name", key: "owner_name" },
    { label: "property name", key: "prop_name" },
    { label: "property type", key: "prop_type" },
    { label: "year built", key: "year_built" },
    { label: "address", key: "address" },
    { label: "zip", key: "zip" },
    { label: "site energy usage kbtu", key: "site_energy_usage_kbtu_sf" },
    { label: "total energy usage kbtu", key: "total_energy_usage_kbtu" },
    { label: "percent electricity used", key: "percentage_elec" },
    { label: "ghg intensity", key: "ghg_intesity" },
    { label: "onsite renewable kwh", key: "onsite_renewable_kwh" },
  ];

  return (
    <Button>
      <CSVLink data={data} headers={headers}>
        Export
      </CSVLink>
    </Button>
  );
};

export default ExportReactCSV;
