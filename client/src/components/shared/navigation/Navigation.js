import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navigation = ({ loggedIn, handleLogout }) => {
  return (
    <div>
      <nav>
        <Link to="/home">
          <Button>Home</Button>
        </Link>
        {!loggedIn && (
          <Link to="/signin">
            <Button>Login</Button>
          </Link>
        )}
        {loggedIn && <Button onClick={handleLogout}>Logout</Button>}
      </nav>
    </div>
  );
};

export default Navigation;
