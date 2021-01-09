import React from 'react';
import {connect} from 'react-redux';
import {
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';



const Auth = ({ component: Component, path, loggedIn, channelId, exact }) => {
    return <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to={`/channels/${channelId}`} />
            )
    )} />
        };

const Protected = ({ component: Component, path, loggedIn, exact }) => {
    return <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
        };

const mSTP = state => { 
    let defaultValue; 
    if(state.entities.users[state.session.id]){
        defaultValue = state.entities.users[state.session.id].channel_ids[0];
    } else{
       defaultValue = 1; 
    }
    return {
    loggedIn: Boolean(state.session.id),
    defaultChannel: defaultValue
}} 

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));