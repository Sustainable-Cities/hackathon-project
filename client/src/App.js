import { React, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "./components/shared/layout/Layout";
import Home from "../src/screens/home/Home";
import SignUp from "../src/screens/signup/SignUp";
import SignIn from "../src/screens/signin/SignIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };
  return (
    <div className="App">
      <Layout
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/signup" component={SignUp} />
          <Route
            path="/signin"
            exact
            render={() => {
              return <SignIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
            }}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
