import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Individuals from "./Individuals";
import OrganizationForm from "./OrganizationForm";
import Availability from "./ProfileForm/Availability";
import Interests from "./ProfileForm/Interests";
import Personal from "./ProfileForm/Personal";
import Professional from "./ProfileForm/Professional";
import Skills from "./ProfileForm/Skills";
import Providers from "./Providers";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import WithAuth from "./WithAuth";

const Root = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/profile-personal">
            <WithAuth>
              <Personal />
            </WithAuth>
          </Route>
          <Route path="/profile-interests">
            <WithAuth>
              <Interests />
            </WithAuth>
          </Route>
          <Route path="/profile-professional">
            <WithAuth>
              <Professional />
            </WithAuth>
          </Route>
          <Route path="/profile-skills">
            <WithAuth>
              <Skills />
            </WithAuth>
          </Route>
          <Route path="/profile-availability">
            <WithAuth>
              <Availability />
            </WithAuth>
          </Route>
          <Route path="/individuals">
            <WithAuth>
              <Individuals />
            </WithAuth>
          </Route>
          <Route path="/organization-sign-up">
            <WithAuth>
              <OrganizationForm />
            </WithAuth>
          </Route>
          <Route path="/">
            <WithAuth>
              <Home />
            </WithAuth>
          </Route>
        </Switch>
      </Router>
    </Providers>
  );
};

export default Root;
