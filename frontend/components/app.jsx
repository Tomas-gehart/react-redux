import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashHeaderContainer from "./splash_header_container";
import ViewTeam from "./channels/view_team";
import ChannelFormContainer from "./channels/channelform_container";




const App = () => (
  <div className="top-div">
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashHeaderContainer} />
    <AuthRoute path="/view-team" component={ViewTeam} />
    <Route
      exact
      path="/new"
      component={ChannelFormContainer}
    />
  </div>
);

export default App;
