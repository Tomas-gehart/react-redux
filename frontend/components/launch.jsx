import React from 'react';
import { Link } from 'react-router-dom';



const Launch = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login"></Link>
      &nbsp;or&nbsp;
            <Link to="/signup"></Link>
        </nav>
    );
    const personalLaunch = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalLaunch() : sessionLinks();
};


export default Launch;



