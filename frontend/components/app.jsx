import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashHeaderContainer from "./splash_header_container";
import NavBar from './splash_body';
import Channel from "./channels/channels";
import Chat from "./channels/chat";
import Footer from "./splash_footer";
import ChannelFormContainer from "./channels/new_channel_form";

const App = () => (
    <div className="top-div">
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/' component={SplashHeaderContainer} />
        <Route exact path="/new" component={ChannelFormContainer} />
        <Route path="/channels" component={Channel} />
        <Route path="/chat" component={Chat} />
    </div>
);

export default App;
