import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  const user = 1;

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
          {
            user?(
              <Header />
            ):(
              <Login/>
            )
          }
          </Route>
        </Switch>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
