import { TelescopeIcon } from "@primer/octicons-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";

import { selectMessage } from "./alert/alertSlice";

import Analytics from "./Analytics";
import Alert from "./alert/Alert";
import Home from "./Home";
import Settings from "./Settings";

const App = () => {
  const alertMessage = useSelector(selectMessage);

  return (
    <div className="d-flex flex-column">
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
      {alertMessage !== "" && <Alert />}
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
