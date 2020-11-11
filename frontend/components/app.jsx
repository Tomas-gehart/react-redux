import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashHeaderContainer from "./splash_header_container";
<<<<<<< HEAD
import ViewTeam from "./rooms/view_team";
import roomFormContainer from "./rooms/roomform_container";
import Nav from "./rooms/navbar";
import Home from "./rooms/home";
import Chatroom from "./rooms/chatroom";
=======
import ViewTeam from "./channels/view_team";
import ChannelFormContainer from "./channels/channelform_container";
import Nav from "./channels/navbar";
import Home from "./channels/home";
import ChatRoom from "./channels/chatroom";
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84





const App = () => (
  <div className="top-div">
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SplashHeaderContainer} />
    <AuthRoute path="/view-team" component={ViewTeam} />
    <Route path="/view-team-nav" component={Nav} />
<<<<<<< HEAD
    <Route exact path="/new" component={roomFormContainer} />
    <Route exact path="/room" component={Home} />
    <Route exact path="/room/:roomId" component={Chatroom} />
=======
    <Route exact path="/new" component={ChannelFormContainer} />
    <Route exact path="/channel" component={Home} />
    <Route exact path="/channel/:roomId" component={ChatRoom} />
>>>>>>> 72dba118522b75e7535dbe7f8eee108456e9ad84
  </div>
);

export default App;
