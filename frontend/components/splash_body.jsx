import { Link } from 'react-router-dom';
import React from 'react';


const NavBar = props => {
    return <>
        <ul className="session-nav">  
            <img src={window.logo} className="splash-picture" />

            <a className="navbar-link" href="https://github.com/rvsin8"><p>GitHub</p></a>
            <a className="navbar-link" href="https://www.linkedin.com/in/ravneet-singh-20b978a4/">LinkedIn</a>

            
            <li><Link to="/login" className="navbar-link">Log In</Link></li>
            <div classname="tired">
                <li><Link to="/signup" className="navbar-right">Try For Free</Link></li>

            </div>
            

         </ul>
    </>;
}
export default NavBar;
