import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashHeaderContainer from "./splash_header_container";
import Chat from "./channels/chat";
import Channel from "./channel/channel";


const App = () => (
  <div className="top-div">
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashHeaderContainer} />
    <Route path="/chat" component={Chat} />
    <AuthRoute path="/channels/:channelId" component={Channel} />
  </div>
);

export default App;
