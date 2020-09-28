import { Link } from 'react-router-dom';
import React from 'react';


const NavBar = props => {
    return <>
        <ul className="session-nav">  
            <img src="https://gm1.ggpht.com/cIrYQLo5XTnaOOpoRuNCR_y84vAH3YJelKKeqKa4n4mJowglA6v2QmCvVbUuFXRgwBAJhcwZ5Of6ieVN_-cUVDZmAwOVJz9t0diYDxzNBU-bID0VtOidMPW012bGDW5E9i5rHNNM5UuEHhrFm4bzmg9FqFhBACPZs5uMxeQhAx6gfOpbyeXzwqKcktPevQT6k-yAnEeESSbECdBNawY25-QhJgpt8FR8b7m7KhIWsxbKzJv1B5awgqaOgbnHn9yMl8B9xNCRPv6ZXDVXoL873BC67Czh3SbqDs5WbhVTZiHE-4S2_EgR_WCiZYsP__lHJWLV1qv9BG7kGGcik7l2y6tVlbrc3IMVTqv45YSoG7M2jOvRVYKA-JGZ9IjBmDurVsWeiOpljheKeNYRJGXrks46w3G-Hb0HAOXp90vhIeDGdz9R_UJTfxHaw3Hq3h7XmvZsa7hrwqwGe72bs0y2x6iXurunrwpykYxw-Y7lRWFkBbNNez9XYA_dNUfPFrZtZwRiQFKS86jZiw7AJQwd25xRJNCVmSrKEtW0LHEHTu9Rho3ryeXf_U5G2dB3c1aR_u4PuQBUeeX--Hn5PKVmzLT3KD8jD1YuRCcyqcC7a8P0Xbnhr8yl7PiLQYD3SGf0wPkiwszsRUV3IyEdkqAI-jDN-hYHHpT1scibuODCax_sqhYdiF2Ot15JlkcF20RkE3EdvpbhTvCeE0A-xGffhigDG-ROU2uMoaW1fRjWdksv2VrDtDAj54UIrrJEbX8A3A=s0-l75-ft-l75-ft" className="splash-picture" />

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
