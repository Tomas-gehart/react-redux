import { Link } from 'react-router-dom';
import React from 'react';


const NavBar = props => {
    return <>
        <ul className="session-nav">  
            <img src={window.logo} className="splash-picture" />

            <li><Link to="/" className="navbar-link">Why 6lack?</Link></li>
            <a className="navbar-link" href="https://github.com/rvsin8"><p>GitHub</p></a>
            <a className="navbar-link" href="https://www.linkedin.com/in/ravneet-singh-20b978a4/">LinkedIn</a>

            
            <li><Link to="/login" className="navbar-link">Contact Sales</Link></li>
            <li><Link to="/login" className="navbar-link">Log In</Link></li>
            <div classname="tired">
                <li><Link to="/signup" className="navbar-right">LAUNCH 6LACK</Link></li>

            </div>
            

         </ul>
    </>;
}
export default NavBar;
