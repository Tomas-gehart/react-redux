import { Link } from 'react-router-dom';
import React from 'react';


const Footer = props => {
    return <>
        <ul className="session-footer">
            <img src="https://mail.google.com/mail/u/0?ui=2&ik=2250439bd6&attid=0.1.1&permmsgid=msg-f:1679099208136606078&th=174d5bd5639f417e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8eM9XY0yoRVkhKOHwL6HGM9wzdK2FuwpQmcpucnKnIeiWHF-DmtzAbwHozBPFgOonWndozXBPM6LAneTPagkBd4OLiorscCz0iQZ-Vziv5adRC7zAPOvuFp8U&disp=emb" className="splash-picture" />

            <li><Link to="https://github.com/rvsin8/6LACK" className="footer-link">Github</Link></li>
            <li><Link to="https://www.linkedin.com/in/ravneet-singh-20b978a4/" className="footer-link">Linked In</Link></li>


        </ul>
    </>;
}
export default Footer;
