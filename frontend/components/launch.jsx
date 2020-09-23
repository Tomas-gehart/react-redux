import React from 'react';
import { Link } from 'react-router-dom';



const Launch = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log In!</Link>
      &nbsp;or&nbsp;
            <Link to="/signup">Sign Up!</Link>
        </nav>
    );
    const personalLaunch = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hello, {currentUser.username}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalLaunch() : sessionLinks();
};


export default Launch;



