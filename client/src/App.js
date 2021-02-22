import { React, useState, useEffect } from "react";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/MaterialUITheme";
import Layout from "./components/shared/layout/Layout";
import Home from "../src/screens/home/Home";
import SignUp from "../src/screens/signup/SignUp.jsx";
import SignIn from "../src/screens/signin/SignIn.jsx";
import { __removeToken, __CheckSession } from "./services/UserServices";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(null);
  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(null);
    __removeToken();
    history.push("/");
  };
  useEffect(() => {
    verifyTokenValid();
  }, []);

  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        setLoggedIn(session.user);
        history.push("/");
      } catch (error) {
        localStorage.clear();
        setLoggedIn();
      }
    } else {
      setLoggedIn();
    }
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Layout
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            {loggedIn ? (
              <Home loggedIn={loggedIn} />
            ) : (
              <SignIn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            )}
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default withRouter(App);
