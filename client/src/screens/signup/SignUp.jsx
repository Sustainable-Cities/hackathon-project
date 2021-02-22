import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/LogoHolder.png";
import loginImg from "../../assets/login-image.jpg";
import { __CreateUser } from "../../services/UserServices";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  signUp: {
    marginTop: "8vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  color: {
    backgroundColor: "#E5E5E5",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10%",
  },
  button: {
    backgroundColor: "#0039A9",
    color: "white",
    margin: "1em 2em",
    borderRadius: "1em",
    width: "30%",
    height: "2.5em",
  },
  text: {
    height: "2.5em",
    width: "30%",
    margin: ".5em",
    border: "1px solid transparent",
    borderRadius: "1em",
    backgroundColor: "white",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF",
  },
  title: {
    fontWeight: "200",
    fontSize: "2em",
    marginBottom: "1em",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const initialState = {
    username: "",
    email: "",
    password: "",
    re_password: "",
  };
  const history = useHistory();
  const [formState, setFormState] = useState(initialState);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formState.password === formState.re_password) {
      await __CreateUser(formState);
      history.push("/");
    }
    setFormState(initialState);
  };
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };
  return (
    <div className={classes.signUp}>
      <div className={classes.color}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "118px", height: "116px", marginBottom: "1em" }}
          />
          <Typography className={classes.title}>Sign Up!</Typography>
          <input
            id="username"
            onChange={handleChange}
            value={formState.username}
            placeholder="Username"
            className={classes.text}
          />
          <br />
          <input
            id="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
            type="email"
            className={classes.text}
          />
          <br />
          <input
            id="password"
            onChange={handleChange}
            value={formState.password}
            placeholder="Password"
            type="password"
            className={classes.text}
          />
          <br />
          <input
            id="re_password"
            onChange={handleChange}
            value={formState.re_password}
            placeholder="Confirm Password"
            type="password"
            className={classes.text}
          />
          <br />
          <button type="submit" className={classes.button}>
            Sign Up
          </button>
        </form>
      </div>
      <img
        src={loginImg}
        alt="login image"
        style={{ width: "50vw", height: "100%" }}
      />
    </div>
  );
};

export default SignUp;
