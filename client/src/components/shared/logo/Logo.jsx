import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logoimg} alt="logo" style={{ width: "80px" }} />
    </Link>
  );
}
