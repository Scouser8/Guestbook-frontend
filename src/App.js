import React from "react";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Register from "./Register";
import Home from "./Home";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {user ? (
              <>
                <Header user={user} /> <Home user={user} />
              </>
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <h1>ERROR 404 page not found!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
