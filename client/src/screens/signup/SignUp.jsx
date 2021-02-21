import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField"
import { __CreateUser } from "../../services/UserServices";

const useStyles = makeStyles((theme) => ({
  signUp: {
    marginTop: "8vh",
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
      //   props.history.push("/home");
    }
    setFormState(initialState);
  };
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };
  return (
    <div className={classes.signUp}>
      <div className="registrationTitle">Register Below:</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="usernameLabel">
          Enter Username:{" "}
        </label>
        <TextField
          id="username"
          onChange={handleChange}
          value={formState.username}
          placeholder="Username"
          className="usernameInput"
        />
        <br />
        <label htmlFor="email" className="registrationEmailLabel">
          Enter Email:{" "}
        </label>
        <TextField
          id="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
          type='email'
          className="registrationEmailInput"
        />
        <br />
        <label htmlFor="password" className="registrationPasswordLabel">
          Enter Password:{" "}
        </label>
        <TextField
          id="password"
          onChange={handleChange}
          value={formState.password}
          placeholder="Password"
          type='password'
          className="registrationPasswordInput"
        />
        <br />
        <label htmlFor="re_password" className="re_passwordLabel">
          Confirm Password:{" "}
        </label>
        <TextField
          id="re_password"
          onChange={handleChange}
          value={formState.re_password}
          placeholder="Confirm Password"
          type='password'
          className="re_passwordInput"
        />
        <button type="submit" className="registrationFormSubmit hvr-grow">
          Submit
        </button>
      </form>
      <div className="qualification">Email must be unique</div>
      <br />
      <div className="qualification">
        Password must be combination of at least 8 letters and numbers
      </div>
    </div>
  );
};

export default SignUp;
