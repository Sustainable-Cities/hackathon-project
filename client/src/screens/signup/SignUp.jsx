import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
  const handleSubmit = (event) => {
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
        <input
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
        <input
          id="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
          className="registrationEmailInput"
        />
        <br />
        <label htmlFor="password" className="registrationPasswordLabel">
          Enter Password:{" "}
        </label>
        <input
          id="password"
          onChange={handleChange}
          value={formState.password}
          placeholder="Password"
          className="registrationPasswordInput"
        />
        <br />
        <label htmlFor="re_password" className="re_passwordLabel">
          Confirm Password:{" "}
        </label>
        <input
          id="re_password"
          onChange={handleChange}
          value={formState.re_password}
          placeholder="Confirm Password"
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
