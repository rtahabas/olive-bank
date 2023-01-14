import Navbar from "./components/navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              {user && <Home />}
              {!user && <Redirect to="/login" />}
            </Route>
            <Route path="/login" exact>
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup" exact>
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
