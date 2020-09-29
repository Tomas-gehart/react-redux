import { Link } from 'react-router-dom';
import React from 'react';


const NavBar = props => {
    return <>
        <ul className="session-nav">  
            <img src="https://mail.google.com/mail/u/0?ui=2&ik=2250439bd6&attid=0.1.1&permmsgid=msg-f:1679099208136606078&th=174d5bd5639f417e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8eM9XY0yoRVkhKOHwL6HGM9wzdK2FuwpQmcpucnKnIeiWHF-DmtzAbwHozBPFgOonWndozXBPM6LAneTPagkBd4OLiorscCz0iQZ-Vziv5adRC7zAPOvuFp8U&disp=emb" className="splash-picture" />

            <li><Link to="/" className="navbar-link">Why 6lack?</Link></li>
            <li><Link to="/" className="navbar-link">Solutions</Link></li>
            <li><Link to="/" className="navbar-link">Resources</Link></li>
            <li><Link to="/" className="navbar-link">Enterprise</Link></li>
            <li><Link to="/" className="navbar-link">Pricing</Link></li>
            <li><Link to="/login" className="navbar-link">Log In</Link></li>
            <li><Link to="/login" className="navbar-link">Contact Sales</Link></li>
            <li><Link to="/signup" className="navbar-right">LAUNCH 6LACK</Link></li>

         </ul>
    </>;
}
export default NavBar;
