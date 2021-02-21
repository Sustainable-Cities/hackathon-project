import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { __LoginUser } from "../../services/UserServices";

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: "8vh",
  },
}));

const SignIn = ({ loggedIn, setLoggedIn }) => {
  const classes = useStyles();
  const initialState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialState);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Axios({
    //   url: "https://st6.herokuapp.com/token/login/",
    //   method: "POST",
    //   data: formState,
    // }).then((res) => {
    //   localStorage.setItem("token", res.data.auth_token);
    //   setLoggedIn(true);
    // });
    const data = await __LoginUser(formState);
    localStorage.setItem("token", data.user.id);
    setLoggedIn(true);

    setFormState(initialState);
  };
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classes.login}>
      <div className="loginTitle">Login Below:</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="emailLabel">
          Enter Email:{" "}
        </label>
        <input
          id="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
          className="emailInput"
        />{" "}
        <br />
        <label htmlFor="password" className="passwordLabel">
          Enter Password:{" "}
        </label>
        <input
          id="password"
          onChange={handleChange}
          value={formState.password}
          placeholder="Password"
          className="passwordInput"
        />
        <button type="submit" className="loginSubmit hvr-grow">
          Submit
        </button>
      </form>
      <div className="registrationTitle">Not Signed up? Register Below:</div>
      <br />
      <Link to="/signup" className="registration hvr-grow">
        Register
      </Link>
    </div>
  );
};

export default SignIn;
