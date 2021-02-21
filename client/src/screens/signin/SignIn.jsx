import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField"
import { __LoginUser } from "../../services/UserServices";

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: "8vh",
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },
  color: {
    backgroundColor: '#E5E5E5',
    height: '100vh'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%'
  },
  button: {
    backgroundColor: '#0039A9',
    color: 'white',
    margin: '1em 2em',
    borderRadius: '1em',
    width: '30%',
    height: '2.5em'
  },
  text: {
    height: '2.5em',
    width: '30%',
    margin: '.5em',
    border: '1px solid transparent',
    borderRadius: '1em',
    backgroundColor: 'white',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF',
  },
  title: {
    fontWeight: '200',
    fontSize: '2em',
  }
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
    const data = await __LoginUser(formState);
    localStorage.setItem("token", data.token);
    setLoggedIn(data.user);

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
      <div className={classes.color}>
      <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.title}>Log in with your email</div>
        <input
          id="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
          type='email'
          className={classes.text}
          />
        <br />
        <input
          id="password"
          onChange={handleChange}
          value={formState.password}
          placeholder="Password"
          className={classes.text}
          type='password'
          />
          <br />
        <button type="submit" className={classes.button}>
          Log In
        </button>
      <div className="registrationTitle">Don't have an account? <Link to='/signup'>Signup here</Link></div>
      </form>
          </div>
      <div>Picture</div>
    </div>
  );
};

export default SignIn;
