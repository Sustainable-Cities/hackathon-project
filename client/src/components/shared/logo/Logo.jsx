import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../../assets/LogoHolder.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logoimg} alt="logo" style={{ height: "8vh" }} />
    </Link>
  );
}
