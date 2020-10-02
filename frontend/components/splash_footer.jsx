import { Link } from 'react-router-dom';
import React from 'react';


const Footer = props => {
    return <>
        <ul className="session-footer">
            <div className="footer-1">
                <img src={window.logo} className="splash-picture" />

                <li><Link to="https://github.com/rvsin8/6LACK" className="footer-link">Github</Link></li>
                <li><Link to="https://www.linkedin.com/in/ravneet-singh-20b978a4/" className="footer-link">Linked In</Link></li>


            </div>


        </ul>
    </>;
}
export default Footer;
