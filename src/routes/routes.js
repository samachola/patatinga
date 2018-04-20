import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import LandingPage from "../components/LandingPage/LandingPage.component";
import Dashboard from "../pages/Dashboard.component";

const Root = () => (
  <Router>
    <Route path="/" component={Dashboard} />
  </Router>
);

export default Root;
