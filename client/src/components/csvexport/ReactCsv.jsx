import React from "react";
import { CSVLink } from "react-csv";
import Button from "@material-ui/core/Button";

const ExportReactCSV = ({ data }) => {
  const headers = [
    { label: "ranking", key: "ranking" },
    { label: "owner_name", key: "owner_name" },
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
