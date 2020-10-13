import { TelescopeIcon } from "@primer/octicons-react";
import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Analytics from "../Analytics";
import Home from "../Home";
import Settings from "../Settings";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="Header px-4">
        <div className="Header-item">
          <NavLink to="/" className="Header-link">
            <TelescopeIcon className="mr-2" />
            ViPA
          </NavLink>
        </div>
        <div className="Header-item">
          <NavLink to="/analytics" className="Header-link">
            Analytics
          </NavLink>
        </div>
        <div className="Header-item">
          <NavLink to="/settings" className="Header-link">
            Settings
          </NavLink>
        </div>
      </header>
      <div className="p-4">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
