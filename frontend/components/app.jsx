import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util'; 
import Splash from "./splash";
import NavBar from './splash_body';

const App = () => (
    <div className="top-div">
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignupFormContainer} />
        <Route exact path='/' component={Splash} />                
        <Route path="/" component={NavBar} />

    </div>
);

export default App;

