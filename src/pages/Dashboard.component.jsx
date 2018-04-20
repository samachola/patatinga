import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage.component";
import SignIn from "../components/SignIn/SignIn.component";
import SignUp from "../components/SignUp/SignUp.component";
import Footer from "../common/footer/Footer.component";
import Dash from "../pages/Dash.component";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dash} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
