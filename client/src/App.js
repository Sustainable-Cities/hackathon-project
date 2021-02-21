import { React, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./styles/MaterialUITheme";
import Layout from "./components/shared/layout/Layout";
import Home from "../src/screens/home/Home";
import SignUp from "../src/screens/signup/SignUp.jsx";
import SignIn from "../src/screens/signin/SignIn.jsx";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(null);
  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(null);
    history.push("/");
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
              <Home />
            ) : (
              <SignIn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            )}
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
