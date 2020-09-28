import { Link } from 'react-router-dom';
import React from 'react';


const NavBar = props => {
    return <>
        <ul className="session-nav">  
            <img src="https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg" className="splash-picture" />

            <li><Link to="/" className="navbar-link">Why 6lack?</Link></li>
            <li><Link to="/" className="navbar-link">Solutions</Link></li>
            <li><Link to="/" className="navbar-link">Resources</Link></li>
            <li><Link to="/" className="navbar-link">Enterprise</Link></li>
            <li><Link to="/" className="navbar-link">Pricing</Link></li>
            <li><Link to="/login" className="navbar-link">Log In</Link></li>
            <li><Link to="/login" className="navbar-link">Contact Sales</Link></li>
            <li><Link to="/signup" className="navbar-right">LAUNCH SLACK</Link></li>

         </ul>
    </>;
}
export default NavBar;
