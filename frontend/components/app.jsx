import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util'; 
import Launch from "./launch_container";
import Splash from "./splash";

const App = () => (
    <div className="top-div">
        <header className= "header-div">
            <h1>6LACK</h1>
        </header>
        

        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/' component={Launch} />
         </Switch>
    </div>
);

export default App;

