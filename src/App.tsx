import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import WelcomePage from "./views/WelcomePage/index";
import PersonalPage from "./views/PersonalPage/index";
import DobPage from "./views/DobPage/index";
import AgreementPage from "./views/AgreementPage/index";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/test/welcome" component={WelcomePage} />
        <Route exact path="/test/personal" component={PersonalPage} />
        <Route exact path="/test/dob" component={DobPage} />
        <Route exact path="/test/agreement" component={AgreementPage} />
        <Redirect to="/test/welcome" />
      </Switch>
    </div>
  );
}

export default App;
