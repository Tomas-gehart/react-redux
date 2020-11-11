import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashHeaderContainer from "./splash_header_container";
import ViewTeam from "./rooms/view_team";
import roomFormContainer from "./rooms/roomform_container";
import Nav from "./rooms/navbar";
import Home from "./rooms/home";
import Chatroom from "./rooms/chatroom";





const App = () => (
  <div className="top-div">
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashHeaderContainer} />
    <AuthRoute path="/view-team" component={ViewTeam} />
    <Route path="/view-team-nav" component={Nav} />
    <Route exact path="/new" component={roomFormContainer} />
    <Route exact path="/room" component={Home} />
    <Route exact path="/room/:roomId" component={Chatroom} />
  </div>
);

export default App;
