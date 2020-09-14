import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Register from "./Register";
import Home from "./Home";

function App() {
  const user = 1;

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {user ? <> <Header /> <Home/> </>: <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
