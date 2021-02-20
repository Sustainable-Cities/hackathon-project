import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Navigation = ({ loggedIn, handleLogout }) => {
  return (
    <div>
      <nav>
        <Link to="/home">
          <Typography>Home</Typography>
        </Link>
        {!loggedIn && <Link to="/signin">Login</Link>}
        {loggedIn && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </div>
  );
};

export default Navigation;
