import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util'; 
import Splash from "./splash";
import NavBar from './splash_body';
import Channel from "./channels/channels";
import Chat from "./channels/chat";
import Footer from "./splash_footer";

const App = () => (
    <div className="top-div">
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/' component={Splash} />                
        <Route path="/" component={NavBar} />
        <Route path="/" component={Footer} />
        <Route path="/channels" component={Channel} />
        <Route path="/chat" component={Chat} />
    

    </div>
);

export default App;

