import React from 'react';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { AuthRoute } from '../util/route_util'; 

const App = () => (
    <div>
        <h1>6LACK</h1>
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;

//checkthispageout //superconfused