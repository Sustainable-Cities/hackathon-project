import { React, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/MaterialUITheme";
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
    // <div className="App">
    <ThemeProvider theme={mainTheme}>
      <Layout
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path="/home" exact>
            <Home loggedIn={loggedIn} />
          </Route>
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
    </ThemeProvider>
    // </div>
  );
}

export default App;
